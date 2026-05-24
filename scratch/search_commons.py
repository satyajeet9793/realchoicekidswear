import urllib.request
import urllib.parse
import json
import ssl
import re

def search_commons(keyword, limit=5):
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    
    # Wikimedia Commons search API for files (namespace 6)
    query_str = urllib.parse.quote(keyword)
    url = f"https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={query_str}&format=json&srnamespace=6&srlimit={limit}"
    
    req = urllib.request.Request(
        url,
        headers={'User-Agent': 'BoutiqueImageUpdater/1.0 (contact@realchoice.com) Mozilla/5.0'}
    )
    
    try:
        with urllib.request.urlopen(req, context=ctx) as response:
            data = json.loads(response.read().decode('utf-8'))
            search_results = data.get('query', {}).get('search', [])
            
            files = []
            for res in search_results:
                title = res['title'] # Format is "File:Example.jpg"
                filename = title.replace("File:", "")
                
                # Fetch direct image URL for this file
                url_info = f"https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(title)}&prop=imageinfo&iiprop=url&format=json"
                req_info = urllib.request.Request(url_info, headers={'User-Agent': 'BoutiqueImageUpdater/1.0'})
                
                with urllib.request.urlopen(req_info, context=ctx) as res_info:
                    info_data = json.loads(res_info.read().decode('utf-8'))
                    pages = info_data.get('query', {}).get('pages', {})
                    for page_id, page_val in pages.items():
                        imageinfo = page_val.get('imageinfo', [])
                        if imageinfo:
                            direct_url = imageinfo[0]['url']
                            files.append({
                                'title': filename,
                                'url': direct_url
                            })
            return files
    except Exception as e:
        print(f"Error searching Commons for '{keyword}': {e}")
        return []

if __name__ == "__main__":
    print("Testing search on Wikimedia Commons...")
    results = search_commons("little girl pink dress", 3)
    for idx, r in enumerate(results):
        print(f"[{idx}] Name: {r['title']}\n    URL: {r['url']}")
