from flask import Flask, render_template, url_for, request
import json
import pandas as pd

app = Flask(__name__)
#df = pd.read_csv('~/code/professional/bestiary/data/student_data.csv')


#@app.route('/')
#def index():
    #
    #return render_template("index.html")


@app.route('/dashboard', methods=['GET','POST'])
@app.route('/')
def dashboard():
   
    #username = requests.get('username')
    #data = df[df['name'] == username][['progress','last_week']]

    data = {'progress': [['Wolf',1],['Horse',1],['Bear',.25]],
            'last_week': [40,40,20,45,5,0,0]}

    return render_template("dashboard.html", prog=data['progress'],
                           last_week=data['last_week'])

app.run(debug=True)
