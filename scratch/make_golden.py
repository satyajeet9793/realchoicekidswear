import sys
from PIL import Image

def make_golden(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    new_data = []
    
    # Premium Golden color #D4AF37
    gold_r, gold_g, gold_b = 212, 175, 55
    
    for item in data:
        r, g, b, a = item
        # Calculate darkness (0 to 1) based on luminance
        lum = (0.299*r + 0.587*g + 0.114*b)
        
        # If the image already has transparency, we should respect it
        if a == 0:
            new_data.append((0, 0, 0, 0))
            continue
            
        darkness = max(0, min(1, 1.0 - (lum / 255.0)))
        
        # We increase the contrast slightly to make sure the black parts are solid gold
        # and white parts are completely transparent.
        if darkness > 0.8:
            new_a = 255
        elif darkness < 0.2:
            new_a = 0
        else:
            new_a = int(darkness * 255)
        
        new_data.append((gold_r, gold_g, gold_b, new_a))
        
    img.putdata(new_data)
    
    # Get bounding box of non-transparent pixels and crop
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(output_path, "PNG")
    print(f"Saved golden logo to {output_path}")

if __name__ == "__main__":
    make_golden(sys.argv[1], sys.argv[2])
