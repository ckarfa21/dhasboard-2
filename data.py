import pandas as pd
import json
import os

def openfile(filename):
    dataset= pd.read_csv(filename, sep=';')
    return dataset

#afficher les données par jour et au total et convertir au format json

def getDataQuotidien(dataset):
    total_sex = dataset['sexe'].isin([0])
    dataset2 = dataset[total_sex] 
    dataset_day = dataset2.groupby("jour").sum()
    #ON TRANSFORME LES DONNEES EN JSON
    return(dataset_day.to_json())


#afficher la moyenne par sexe et convertir au format json
def getMoyennesParSex(dataset):
    moyenne_sexe = dataset.groupby("sexe").mean()
    #ON TRANSFORME LES DONNEES EN JSON
    return(moyenne_sexe.to_json())





#permet de lire le fichier json 
#datajson = json.loads(data)
#encodage
#print(json.dumps(datajson))





 #