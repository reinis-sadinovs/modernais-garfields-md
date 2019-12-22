from flask import Flask, render_template, redirect, url_for, request
app = Flask(__name__)

import csv

@app.route('/', methods=['GET', 'POST'])
def lgn():
   login = False
    
#   answer = input("Do you have an account?(yes or no) ")

   with open('unames.csv', 'r', encoding='UTF-8') as csvfile:
      csv_reader = csv.reader(csvfile, delimiter = ';')
#      print (file.read())
      username = request.form['uname_lgn']
      password = request.form['psw_lgn']

      for row in csv_reader:
         print(row)
         print(row[0], row[1])
         print(username, password)
         if row[0]==username and row[1]==password:
            login = True
            print ("Izdevas")
            return render_template('index.html')
            break

            
   if login == True:
        print ("Izdevas__")
        return render_template('index.html')
#            
   else:
        print ("Neizdevas__")
        return render_template('index1.html')            
        exit()  
