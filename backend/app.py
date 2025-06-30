import base64

from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import io

from speechbubble import edit_image

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/speechbubbleleft', methods=['POST'])
def speechbubbleleft():
    data = request.json
    if not data or "image" not in data:
        return jsonify({"error": "No image data"}), 400
    
    base64_str = data["image"].split(",")[1] if "," in data["image"] else data["image"]
    image_bytes = base64.b64decode(base64_str)

    result_base64 = edit_image(image_bytes, "left")
    return jsonify({"image": f"data:image/png;base64,{result_base64}"})
@app.route('/api/speechbubbleright', methods=['POST'])
def speechbubbleright():
    data = request.json
    if not data or "image" not in data:
        return jsonify({"error": "No image data"}), 400
    
    base64_str = data["image"].split(",")[1] if "," in data["image"] else data["image"]
    image_bytes = base64.b64decode(base64_str)

    result_base64 = edit_image(image_bytes, "right")
    return jsonify({"image": f"data:image/png;base64,{result_base64}"})
    

if __name__ == '__main__':
    app.run(debug=True)
