from flask import Flask, render_template
from os import listdir

app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template('index.html')


@app.route('/buh')
def buh():
    return 'buh'


if __name__ == '__main__':
    app.run(debug=True)
