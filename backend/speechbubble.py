from PIL import Image
from io import BytesIO

import base64

def edit_image(image_bytes, bubble_dir):
    img1 = Image.open(BytesIO(image_bytes))
    if bubble_dir == "1" or bubble_dir.lower() == "left":
        img2 = Image.open("speechbubbleleft.png")
    else:
        img2 = Image.open("speechbubbleright.png")

    img1_width, img1_height = img1.size
    new_height = int(img1_height * 0.2)
    img2_resized = img2.resize((img1_width, new_height), Image.LANCZOS)
    img1.paste(img2_resized, (0, 0), mask=img2_resized)

    buffer = BytesIO()
    img1.save(buffer, format="PNG")
    base64_img = base64.b64encode(buffer.getvalue()).decode("utf-8")
    return base64_img
