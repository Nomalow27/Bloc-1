# TD1

## Question 1 

Les méthodes HTTP GET et POST diffèrent ainsi :

- GET : Récupère des données. Les paramètres sont dans l'URL, visibles et limités en taille. Idéal pour des requêtes simples, comme une recherche.

- POST : Envoie des données. Les informations sont dans le corps de la requête, non visibles dans l'URL, et peuvent être volumineuses. Utilisé pour soumettre des formulaires ou envoyer des données sensibles.

## Question 2

|.   |   Get       |  Post |
| :--------------- |:---------------:| -----:|
| Visibilité  | Visible pour l’utilisateur dans le champ d’adresse             |   invisible pour l’utilisateur |
| Marque-page et historique de navigation  | Les paramètres de l’URL sont stockés en même temps que l’URL       |    L’URL est enregistrée sans paramètres URL |
| Cache et fichier log du serveur  |   Les paramètres de l’URL sont stockés sans chiffrement      |  Les paramètres de l’URL ne sont pas enregistrés automatiquement |
| Comportement lors de l’actualisation du navigateur / Bouton « précédent »  | Les paramètres de l’URL ne sont pas envoyés à nouveau            |   Le navigateur avertit que les données du formulaire doivent être renvoyées |
| Type de données | Caractères ASCII uniquement      |    Caractères ASCII mais également données binaires |
| Longueur des données |   Limitée - longueur maximale de l’URL à 2 048 caractères      |  Illimitée |

## Question 3

Le protocole HTTP est extensible grâce à sa capacité à intégrer de nouvelles méthodes, en-têtes, et types de contenu. On peut ajouter des méthodes personnalisées et des en-têtes spécifiques sans perturber les opérations existantes. De plus, HTTP prend en charge de nouveaux formats de données via des types MIME et peut évoluer avec de nouvelles versions (comme HTTP/2 et HTTP/3). Cette flexibilité permet d'adapter HTTP aux besoins changeants du web et des applications.

## Question 4

