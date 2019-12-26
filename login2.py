from flask import Flask, render_template, redirect, url_for, request, json, jsonify
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
import csv

# mana datora strada tikai Opera ar ieslegtu VPN

@app.route('/', methods=['GET', 'POST'])
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
         if str(row[0])==username and str(row[1])==password:
            login = True
            print ("Izdevas")
            return render_template('index.html')
 #           break

            
   if login == True:
        print ("Izdevas__")
        return render_template('index.html')
#            
   else:
        print ("Neizdevas__")
        return render_template('index1.html')            
 #       exit()  
