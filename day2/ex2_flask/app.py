from flask import Flask, jsonify, request
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

programs = []

# Resourceの定義
class Programs(Resource):
    
    def get(self):
        return {'programs': programs}, 200

class Program(Resource):
    
    def get(self, name):
        for program in programs:
            if name == program['title']:
                return {'program': program}
        return {'message': 'リクエストされた番組は存在しません'}, 404
    
    def post(self, name):
        program = request.get_json()
        programs.append(program)
        return {'program': program}, 201
    
# ResourceとPathの紐づけ
api.add_resource(Programs, '/programs')
api.add_resource(Program, '/program/<name>')

app.run(host='0.0.0.0', port=80, debug=True)
