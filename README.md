# MerkleTree-avec-Firebase-API
Initialiser le projet en installant tous les dépendance :
```shell
npm install
```

1-Se rendre sur https://firebase.google.com . </br>
2-Créer un compte si vous n'en avez pas encore  .</br>
3-Créer un projet web . </br>
4-Créer une "collection" : WhiteList . </br>
NB: Pour l'instant vous devez ajouter vos données manuellement.J'ajouterai par la suite un script pour le faire automatiquement . </br>
5-Creer un document avec un champ : 'Address' où vous ajouterez vous address ethereum . </br>

Ensuite,initialiser firebase en completant le fichier .env par les données de configuration de votre projet Firebase :

API_KEY =  
AUTH_DOMAIN =  
PROJECT_ID =   
STORAGE_BUCKET =   
MESSAGING_SENDER_ID =  
APPID =  
MEASUREMENT_ID = 

Lancer le projet avec node :
```shell
node index.js
```
