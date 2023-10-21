from flask import Flask, request, jsonify
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from flask import send_from_directory
import sys
import os
sys.path.append('./backend')
import predictor

app = Flask(__name__, static_url_path='', static_folder='./soiled')
CORS(app)
api = Api(app)

@app.route("/")
def serve():
    return send_from_directory(app.static_folder,'index.html')

@app.route("/form_submit", methods=['GET', 'POST'], strict_slashes=False)
def get_form():
    if request.method == "POST":
        print('BIG BUGGE')
        date = request.json()['date']
        nitrogen = request.json()['nitrogen']
        phosphorus = request.json()['phosphorus']
        potassium = request.json()['potassium']
        pH = request.json()['pH']
        temperature = request.json()['temperature']
        rainfall = request.json()['rainfall']

        return predictor.get_prediction(date, nitrogen, phosphorus, potassium, pH, temperature, rainfall)




"""
app.route('/data', methods=['GET'])
def get_data():
    # Your code to get data from the React JS file goes here
    return jsonify(data)
"""

if __name__ == '__main__':
    app.run(debug=True)
