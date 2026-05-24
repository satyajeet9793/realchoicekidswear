import sys
import subprocess
import os
import time
import urllib.request
import urllib.parse
import urllib.error
import json
import ssl
import re
import io

# Ensure Pillow is installed
try:
    from PIL import Image
except ImportError:
    print("Pillow not found, installing programmatically...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

def make_request(url, headers=None, ctx=None):
    if headers is None:
        headers = {
            'User-Agent': 'RealChoiceBoutiqueUpdater/1.2 (contact@realchoice.com; premium-clothing-catalog) Mozilla/5.0'
        }
    
    retries = 5
    delay = 6
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, context=ctx) as response:
                return response.read()
        except urllib.error.HTTPError as e:
            if e.code == 429:
                print(f"HTTP 429 Too Many Requests for URL {url}. Waiting {delay} seconds and retrying (Attempt {attempt+1}/{retries})...")
                time.sleep(delay)
                delay *= 2
            else:
                raise e
    raise Exception(f"Failed to fetch {url} after {retries} retries due to rate limiting.")

def search_commons_first_image(keyword):
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    
    query_str = urllib.parse.quote(keyword)
    url = f"https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={query_str}&format=json&srnamespace=6&srlimit=10"
    
    print(f"Searching Commons for: '{keyword}'...")
    time.sleep(4) # Polite delay
    try:
        content = make_request(url, ctx=ctx)
        data = json.loads(content.decode('utf-8'))
        search_results = data.get('query', {}).get('search', [])
        
        for res in search_results:
            title = res['title']
            
            # Skip templates, PDF, audio, video files or historical/vintage tags in filenames
            if any(term in title.lower() for term in ['vintage', 'historical', 'museum', '19th', '18th', 'black-and-white', 'icon', 'map', 'flag', '.svg', '.pdf', '.gif', '.ogg']):
                continue
                
            # Fetch direct image URL
            url_info = f"https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(title)}&prop=imageinfo&iiprop=url&format=json"
            print(f"  Fetching details for: {title}...")
            time.sleep(4) # Polite delay
            try:
                info_content = make_request(url_info, ctx=ctx)
                info_data = json.loads(info_content.decode('utf-8'))
                pages = info_data.get('query', {}).get('pages', {})
                for page_id, page_val in pages.items():
                    imageinfo = page_val.get('imageinfo', [])
                    if imageinfo:
                        direct_url = imageinfo[0]['url']
                        if re.search(r'\.(jpg|jpeg|png)$', direct_url, re.IGNORECASE):
                            return direct_url
            except Exception as info_err:
                print(f"  Error fetching info for {title}: {info_err}")
        return None
    except Exception as e:
        print(f"Error searching Commons: {e}")
        return None

def crop_and_resize_to_catalog(image_bytes, filepath):
    img = Image.open(io.BytesIO(image_bytes))
    if img.mode != 'RGB':
        img = img.convert('RGB')
        
    width, height = img.size
    target_ratio = 3.0 / 4.0
    current_ratio = float(width) / float(height)
    
    if current_ratio > target_ratio:
        # Too wide, crop sides
        new_width = int(target_ratio * height)
        offset = (width - new_width) // 2
        crop_box = (offset, 0, width - offset, height)
    else:
        # Too tall, crop bottom and a little top
        new_height = int(width / target_ratio)
        # Shift crop window upwards to preserve the model's head/face (top 15%)
        offset = int((height - new_height) * 0.15)
        crop_box = (0, offset, width, offset + new_height)
        
    cropped_img = img.crop(crop_box)
    resized_img = cropped_img.resize((600, 800), Image.Resampling.LANCZOS)
    resized_img.save(filepath, "PNG")
    print(f"--> Saved perfectly cropped 600x800 px portrait to: {filepath}")

def download_all():
    queries = {
        # Girls Party Wear
        "girls_party_indowestern.png": "Indian girl child traditional dress",
        "girls_party_frock.png": "little girl in pink dress frock smiling portrait",
        "girls_party_gown.png": "little girl in party gown dress",
        
        # Girls Casuals
        "girls_casual_top.png": "little girl in casual top smiling portrait",
        "girls_casual_jeans.png": "little girl wearing jeans portrait",
        "girls_casual_cotton_frock.png": "little girl summer dress floral",
        "girls_casual_tshirt.png": "little girl in t-shirt smiling portrait",
        "girls_casual_coord.png": "child in cute matching dress outfit",
        
        # Ladies Ethnic Wear
        "ladies_ethnic_lehenga.png": "Indian woman lehenga dress smiling traditional",
        "ladies_ethnic_plazo.png": "Indian woman traditional salwar kameez suit palazzo",
        
        # Ladies Casuals
        "ladies_casual_top.png": "woman casual model top portrait",
        "ladies_casual_jeans.png": "woman casual denim jeans fashion portrait"
    }
    
    output_dir = "public/images"
    os.makedirs(output_dir, exist_ok=True)
    
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    
    success_count = 0
    total_items = len(queries)
    
    for filename, search_term in queries.items():
        print(f"\n==================================================")
        print(f"STARTING: {filename} ({search_term})")
        print(f"==================================================")
        
        direct_url = search_commons_first_image(search_term)
        
        if not direct_url:
            # Broader fallback query if first search yielded no standard images
            broader_term = search_term.split()[0] + " girl dress"
            print(f"No image found, trying backup query: '{broader_term}'...")
            direct_url = search_commons_first_image(broader_term)
            
        if direct_url:
            print(f"Found suitable direct URL: {direct_url}")
            print(f"Downloading image file...")
            time.sleep(4) # Polite delay before downloading
            try:
                img_data = make_request(direct_url, ctx=ctx)
                filepath = os.path.join(output_dir, filename)
                crop_and_resize_to_catalog(img_data, filepath)
                success_count += 1
            except Exception as e:
                print(f"Failed to download or process {filename}: {e}")
        else:
            print(f"CRITICAL: No suitable image found on Wikimedia Commons for query: '{search_term}'")
            
    print(f"\n==================================================")
    print(f"COMPLETED CATALOG ASSET UPDATES!")
    print(f"Successfully downloaded and formatted: {success_count}/{total_items} images.")
    print(f"==================================================")

if __name__ == "__main__":
    download_all()
