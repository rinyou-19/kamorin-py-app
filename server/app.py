from flask import Flask
from flask import request, make_response, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS

# Flaskクラスをインスタンス化
app = Flask(__name__)
app.config['MYSQL_HOST'] = 'DB'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'password'
app.config['MYSQL_DB'] = 'kamorin_app_project'
mysql = MySQL()
mysql.init_app(app)
CORS(app)

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response

@app.route('/login', methods=['GET','POST'])
def login():
    # リクエストの取得
    data = request.get_json()
    userName = data['userName']
    password = data['password']
    
    CS = mysql.connection.cursor()
    CS.execute(f'''SELECT * FROM users WHERE name={userName} AND password={password}''')
    Executed_DATA = CS.fetchall()
    
    # レスポンスの設定
    response = { 'result': Executed_DATA }
    return make_response(jsonify(response))

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)
