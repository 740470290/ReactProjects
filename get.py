from flask import Flask,render_template,Response,request
from flask import jsonify
from flask_cors import CORS
import json,time
app = Flask(__name__)
cors = CORS(app, resources={r"/getMsg": {"origins": "*"}})
CORS(app, supports_credentials=True)

@app.route('/', methods=['GET', 'POST'])
def home():
    response = [1,2,3]
    return jsonify(response)

# 启动运行
if __name__ == '__main__':
    app.run(debug=True,port=5000)
