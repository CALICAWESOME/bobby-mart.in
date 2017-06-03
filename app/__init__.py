from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'hi mom'


@app.route('buh')
def buh():
    return 'buh'


if __name__ == '__main__':
    app.run()
