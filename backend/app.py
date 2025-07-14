import base64

from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import io

from speechbubble import edit_image
from stretch import stretch
from deepfry import deepfry

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
@app.route('/api/speechbubblecentre', methods=['POST'])
def speechbubblecentre():
    data = request.json
    if not data or "image" not in data:
        return jsonify({"error": "No image data"}), 400
    
    base64_str = data["image"].split(",")[1] if "," in data["image"] else data["image"]
    image_bytes = base64.b64decode(base64_str)

    result_base64 = edit_image(image_bytes, "centre")
    return jsonify({"image": f"data:image/png;base64,{result_base64}"})
@app.route('/api/stretch', methods=['POST'])
def stretch_endpoint():
    data = request.json
    if not data or "image" not in data or "factor" not in data:
        return jsonify({"error": "Missing image or factor"}), 400

    base64_str = data["image"].split(",")[1] if "," in data["image"] else data["image"]
    image_bytes = base64.b64decode(base64_str)

    try:
        factor = float(data["factor"])
        result_base64 = stretch(image_bytes, factor)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

    return jsonify({"image": f"data:image/png;base64,{result_base64}"})
@app.route("/api/deepfry", methods=["POST"])
def deepfryapi():
    data = request.json
    if not data or "image" not in data:
        return jsonify({"error": "No image data"}), 400
    
    base64_str = data["image"].split(",")[1] if "," in data["image"] else data["image"]
    image_bytes = base64.b64decode(base64_str)

    result_base64 = deepfry(image_bytes)
    return jsonify({"image": f"data:image/png;base64,{result_base64}"})

if __name__ == '__main__':
    app.run(debug=True)
