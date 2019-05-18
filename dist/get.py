from flask import Flask,render_template,Response,request
from flask import jsonify
from flask_cors import CORS
import json,time
app = Flask(__name__)
cors = CORS(app, resources={r"/getMsg": {"origins": "*"}})
CORS(app, supports_credentials=True)

@app.route('/api/headerList', methods=['GET', 'POST'])
def headerList():
    response = ["区块链","小程序","vue","毕业","PHP","故事","flutter","理财","美食","投稿","手帐","书法","PPT","穿搭","打碗碗花","简书","姥姥的澎湖湾","设计","创业","交友","籽盐","教育","思维导图","疯哥哥","梅西","时间管理","golang","连载","自律","职场","考研","慢世人","悦欣","一纸vr","spring","eos","足球","程序员","林露含","彩铅","金融","木风杂谈","日更","成长","外婆是方言","docker"]
    return jsonify(response)
@app.route('/api/<name>', methods=['GET', 'POST'])
def home(name):
  with open('./data/'+name+'.json', 'r', encoding='utf-8') as f:
    json_dict = json.load(f)
  return jsonify(json_dict)
@app.route('/user/login', methods=['GET', 'POST'])
def login():
  response={"success": True}
  return jsonify(response)
@app.route('/', methods=['GET', 'POST'])
def index():
  return render_template('index.html')

# 启动运行
if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0',port=80)
