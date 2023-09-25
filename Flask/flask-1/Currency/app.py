
# from flask import Flask, request, render_template, redirect, session, jsonify

# app = Flask(__name__)

# app.config['SECRET_KEY'] = "abc123"


# @app.route("/")
# def homepage():
#     return render_template('home.html')
 
# @app.route('/result')
# def result():
#     return render_template('result.html')

from flask import Flask, render_template, request, redirect, url_for
import requests

app = Flask(__name__)

# API URL for currency conversion
API_URL = 'https://api.exchangerate.host/latest'

@app.route('/', methods=['GET', 'POST'])
def currency_converter():
    result = None

    if request.method == 'POST':
        search_currency = request.form['search_currency']
        target_currency = request.form['target_currency']
        amount = float(request.form['amount'])

        params = {
            'from': search_currency,
            'to': target_currency,
            'amount': amount
        }

        response = requests.get(API_URL, params=params)

        if response.status_code == 200:
            data = response.json()
            if data.get('success'):
                rates = data.get('rates')
                if target_currency in rates:
                    conversion_rate = rates[target_currency]
                    result = f"{target_currency} {amount * conversion_rate:.2f}"
                else:
                    result = "Error: Target currency not found in rates"
            else:
                result = "Error: API request unsuccessful"
        else:
            result = "Error: Unable to perform conversion"

    return render_template('home.html', result=result)


if __name__ == '__main__':
    app.run(debug=True)
