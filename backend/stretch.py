from PIL import Image
from io import BytesIO
import base64

def stretch(image_bytes, amount):
    img = Image.open(BytesIO(image_bytes))

    # Ensure dimensions are integers
    new_width = max(1, int(img.width * amount))
    new_size = (new_width, img.height)

    stretched_img = img.resize(new_size)

    buffer = BytesIO()
    stretched_img.save(buffer, format="PNG")
    base64_img = base64.b64encode(buffer.getvalue()).decode("utf-8")
    return base64_img
