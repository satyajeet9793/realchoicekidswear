import sys
import subprocess
import os

# Programmatic package installer for Pillow to ensure image cropping works flawlessly
try:
    from PIL import Image
except ImportError:
    print("Pillow not found, installing programmatically...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

import urllib.request
import urllib.parse
import json
import ssl
import re
import io

def search_commons_first_image(keyword):
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    
    query_str = urllib.parse.quote(keyword)
    url = f"https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={query_str}&format=json&srnamespace=6&srlimit=10"
    
    req = urllib.request.Request(
        url,
        headers={'User-Agent': 'BoutiqueImageUpdater/1.0 (contact@realchoice.com) Mozilla/5.0'}
    )
    
    try:
        with urllib.request.urlopen(req, context=ctx) as response:
            data = json.loads(response.read().decode('utf-8'))
            search_results = data.get('query', {}).get('search', [])
            
            for res in search_results:
                title = res['title']
                
                # Fetch direct image URL
                url_info = f"https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(title)}&prop=imageinfo&iiprop=url&format=json"
                req_info = urllib.request.Request(url_info, headers={'User-Agent': 'BoutiqueImageUpdater/1.0'})
                
                with urllib.request.urlopen(req_info, context=ctx) as res_info:
                    info_data = json.loads(res_info.read().decode('utf-8'))
                    pages = info_data.get('query', {}).get('pages', {})
                    for page_id, page_val in pages.items():
                        imageinfo = page_val.get('imageinfo', [])
                        if imageinfo:
                            direct_url = imageinfo[0]['url']
                            # Check if it's a standard image format (jpg, jpeg, png)
                            if re.search(r'\.(jpg|jpeg|png)$', direct_url, re.IGNORECASE):
                                return direct_url
            return None
    except Exception as e:
        print(f"Error searching Commons for '{keyword}': {e}")
        return None

def crop_and_resize_to_catalog(image_bytes, filepath):
    # Open image from bytes
    img = Image.open(io.BytesIO(image_bytes))
    
    # Standardize image to RGB (handles transparency in PNG or paletted images)
    if img.mode != 'RGB':
        img = img.convert('RGB')
        
    width, height = img.size
    
    # Target aspect ratio is 3:4 (w:h)
    target_ratio = 3.0 / 4.0
    current_ratio = float(width) / float(height)
    
    if current_ratio > target_ratio:
        # Image is too wide, crop the sides
        new_width = int(target_ratio * height)
        offset = (width - new_width) // 2
        crop_box = (offset, 0, width - offset, height)
    else:
        # Image is too tall, crop the bottom (or top/bottom equally)
        new_height = int(width / target_ratio)
        # We crop more from the bottom to keep the model's head/face safe
        offset = (height - new_height) // 4
        crop_box = (0, offset, width, height - (offset * 3))
        
    cropped_img = img.crop(crop_box)
    resized_img = cropped_img.resize((600, 800), Image.Resampling.LANCZOS)
    resized_img.save(filepath, "PNG")
    print(f"Saved perfectly cropped 600x800 catalog image to {filepath}!")

def download_all():
    # Tailored fashion search queries to fetch correct female models and girl children outfits
    queries = {
        # Girls Party Wear
        "girls_party_indowestern.png": "Indian girl child traditional dress smiling",
        "girls_party_frock.png": "little girl dress pink frock smiling portrait",
        "girls_party_gown.png": "little girl elegant party gown dress",
        
        # Girls Casuals
        "girls_casual_top.png": "little girl casual outfit t-shirt posing",
        "girls_casual_jeans.png": "little girl wearing blue jeans denim",
        "girls_casual_cotton_frock.png": "little girl floral summer dress cotton",
        "girls_casual_tshirt.png": "little girl smiling t-shirt portrait",
        "girls_casual_coord.png": "little girl play dress outfit",
        
        # Ladies Ethnic Wear
        "ladies_ethnic_lehenga.png": "Indian woman lehenga dress traditional",
        "ladies_ethnic_plazo.png": "Indian woman traditional salwar kameez suit",
        
        # Ladies Casuals
        "ladies_casual_top.png": "woman casual model top portrait green",
        "ladies_casual_jeans.png": "woman casual fashion jeans model"
    }
    
    output_dir = "public/images"
    os.makedirs(output_dir, exist_ok=True)
    
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    
    success_count = 0
    for filename, search_term in queries.items():
        print(f"\n======================================")
        print(f"Processing: {filename} for query '{search_term}'...")
        
        direct_url = search_commons_first_image(search_term)
        if not direct_url:
            # Try a broader backup query if first search yielded no standard images
            broader_term = search_term.split()[0] + " girl dress"
            print(f"No image found, trying backup query: '{broader_term}'...")
            direct_url = search_commons_first_image(broader_term)
            
        if direct_url:
            print(f"Found image: {direct_url}")
            req = urllib.request.Request(
                direct_url,
                headers={'User-Agent': 'BoutiqueImageUpdater/1.0 (contact@realchoice.com) Mozilla/5.0'}
            )
            try:
                with urllib.request.urlopen(req, context=ctx) as response:
                    img_data = response.read()
                    filepath = os.path.join(output_dir, filename)
                    crop_and_resize_to_catalog(img_data, filepath)
                    success_count += 1
            except Exception as e:
                print(f"Failed to download or process {filename}: {e}")
        else:
            print(f"No suitable image found on Commons for '{search_term}'.")
            
    print(f"\nCompleted catalog image updates! Fetched {success_count}/12 images.")

if __name__ == "__main__":
    download_all()
