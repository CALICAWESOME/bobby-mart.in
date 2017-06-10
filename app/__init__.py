from flask import Flask, render_template
from os import listdir

app = Flask(__name__)


@app.route('/')
def hello_world():
    files = [_ for _ in listdir('static') if _.startswith('m1saka')]
    return render_template('index.html', files=files)


@app.route('/buh')
def buh():
    return 'buh'


if __name__ == '__main__':
    app.run(debug=True)
