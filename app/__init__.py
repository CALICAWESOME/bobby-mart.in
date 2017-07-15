from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template('index.html')


@app.route('/buh')
def buh():
    return 'buh'


@app.route('/resume')
def resume():
    return app.send_static_file('resume.pdf')


if __name__ == '__main__':
    app.run()
