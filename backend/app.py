from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import load_img, img_to_array
import numpy as np
import os
import json

app = Flask(__name__)
CORS(app)  # Allow CORS for frontend access

# Load the trained model
model = load_model('model/parasite_model.h5')

UPLOAD_FOLDER = 'static/uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Route to handle prediction based on image input
@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    file = request.files['image']
    filepath = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(filepath)

    # Preprocess the image
    img = load_img(filepath, target_size=(64, 64))
    img_array = img_to_array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)

    # Make prediction using the model
    result = model.predict(img_array)
    
    # Determine prediction label and accuracy
    prediction = "Uninfected" if result[0][0] > 0.5 else "Parasitized"
    accuracy = float(result[0][0]) * 100 if prediction == "Uninfected" else (1 - float(result[0][0])) * 100
    
    return jsonify({
        'prediction': prediction,
        'accuracy': round(accuracy, 2)  # Round to 2 decimal places
    })

@app.route('/parasite_info', methods=['GET'])
def parasite_info():
    with open("parasite_info.json", "r", encoding="utf-8") as f:
        parasite_info = json.load(f)
    return jsonify(parasite_info)


if __name__ == '__main__':
    app.run(debug=True)
