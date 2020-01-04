from flask import Flask, render_template, redirect, url_for, request, json, jsonify, make_response
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

import csv

@app.route('/yn', methods=['GET', 'POST'])
def login():
   print('izsaukums atnaca dati')
   login = False
   j=json.loads(request.data)
   print(j['uname'])
   print(j['pwd'])
   with open('unames.csv', 'r', encoding='UTF-8') as csvfile:
      csv_reader = csv.reader(csvfile, delimiter = ';')
      username = j['uname']
      password = j['pwd']
      print(username, password)
      
      for row in csv_reader:
         print(row)
         print(row[0], row[1])
         print(username, password)
         if row[0]==username and row[1]==password:
            login = True
            print ("Izdevas")
            break

   if login == True:
        print ("Izdevas__")
        myresp = 'JAA'
   else:
        print ("Neizdevas__")
        myresp = 'NEE'
   return (myresp)