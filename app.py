from flask import Flask, render_template, request
import json
#from data import * #on met * pour importer toutes les fonctions du fichier data , nou saurions pu mettre openfile, epenfile3
from data import getDataQuotidien,getMoyennesParSex,openfile




app = Flask(__name__)
# app fait appel au gestionnaire qui utilise flask (équivalant de my db); méthode comme le init dans les classes

#CONNECTION A LA PAGE D'ACCEUIL (page)
@app.route('/')
def page():
    dataset=openfile('./test/donneeshospitalieres.csv')
    data_quotidien = getDataQuotidien(dataset)
    moyennes_sexe = getMoyennesParSex(dataset)
    return render_template('page.html', donnees=data_quotidien, donnees2=moyennes_sexe)
    #donnees à gauche variable python, donnees à droite variable htlm




if __name__ == "__main__" :
    app.run(debug=True)