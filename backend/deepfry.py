from PIL import Image, ImageEnhance, ImageOps
from io import BytesIO
import base64

def deepfry(image_bytes):
    red = ((254, 0, 2), (255, 255, 15))
    img = Image.open(BytesIO(image_bytes)).convert("RGB")
    r = img.split()[0]
    r = ImageEnhance.Contrast(r).enhance(2.0)
    r = ImageEnhance.Brightness(r).enhance(1.5)
    r = ImageOps.colorize(r, red[0], red[1])
    img = Image.blend(img, r, 0.75)
    img = ImageEnhance.Sharpness(img).enhance(100.0)

    buffer = BytesIO()
    img.save(buffer, format="PNG")
    base64_img = base64.b64encode(buffer.getvalue()).decode("utf-8")
    return base64_img