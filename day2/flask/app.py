from flask import Flask, request, jsonify, make_response,render_template

from simulator import simulate_monthly_investment

app = Flask(__name__)

@app.route('/')
def simulate():
    amount = int(request.args.get('amount'))
    duration = int(request.args.get('duration'))
    annual_return = float(request.args.get('annual_return'))

    result_list = simulate_monthly_investment(amount, duration, annual_return)
    result_dict = {'result': result_list}

    response = make_response(jsonify(result_dict))
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers["Content-Type"] = "text/json; charset=utf-8"

    print(response.data)

    return response

@app.route('/index')
def index():
    return render_template('index.html')

app.run(host='0.0.0.0', port=80)