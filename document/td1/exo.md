# TD1

### Question 1 

Les méthodes HTTP GET et POST diffèrent ainsi :

- GET : Récupère des données. Les paramètres sont dans l'URL, visibles et limités en taille. Idéal pour des requêtes simples, comme une recherche.

- POST : Envoie des données. Les informations sont dans le corps de la requête, non visibles dans l'URL, et peuvent être volumineuses. Utilisé pour soumettre des formulaires ou envoyer des données sensibles.

### Question 2

|.   |   Get       |  Post |
| :--------------- |:---------------:| -----:|
| Visibilité  | Visible pour l’utilisateur dans le champ d’adresse             |   invisible pour l’utilisateur |
| Marque-page et historique de navigation  | Les paramètres de l’URL sont stockés en même temps que l’URL       |    L’URL est enregistrée sans paramètres URL |
| Cache et fichier log du serveur  |   Les paramètres de l’URL sont stockés sans chiffrement      |  Les paramètres de l’URL ne sont pas enregistrés automatiquement |
| Comportement lors de l’actualisation du navigateur / Bouton « précédent »  | Les paramètres de l’URL ne sont pas envoyés à nouveau            |   Le navigateur avertit que les données du formulaire doivent être renvoyées |
| Type de données | Caractères ASCII uniquement      |    Caractères ASCII mais également données binaires |
| Longueur des données |   Limitée - longueur maximale de l’URL à 2 048 caractères      |  Illimitée |

### Question 3

Le protocole HTTP est extensible grâce à sa capacité à intégrer de nouvelles méthodes, en-têtes, et types de contenu. On peut ajouter des méthodes personnalisées et des en-têtes spécifiques sans perturber les opérations existantes. De plus, HTTP prend en charge de nouveaux formats de données via des types MIME et peut évoluer avec de nouvelles versions (comme HTTP/2 et HTTP/3). Cette flexibilité permet d'adapter HTTP aux besoins changeants du web et des applications.

### Question 4

HTTP est un protocole sans état, ce qui signifie que chaque requête est indépendante, et le serveur ne conserve aucune information sur les interactions précédentes. Cela implique que pour maintenir la continuité d'une session (comme rester connecté à un compte), des mécanismes comme les cookies ou les identifiants de session sont nécessaires. Cette caractéristique simplifie la gestion des serveurs et facilite la scalabilité, mais elle oblige à inclure toutes les informations nécessaires dans chaque requête.

### Question 5

Une URL se compose des parties suivantes :

- Protocole (https://) : Indique le type de connexion (sécurisée ou non).
- Nom d'hôte (www.example.com) : Spécifie le serveur où la ressource est hébergée.
- Port (:8080) : (Optionnel) Précise le port du serveur à utiliser. Par défaut, HTTP utilise le port 80 et HTTPS le port 443.
- Chemin (/path/to/resource) : Définit l'emplacement de la ressource sur le serveur.
- Paramètres de requête (?query=example) : (Optionnel) Fournit des données supplémentaires pour la requête.
- Fragment (#section) : (Optionnel) Indique une section spécifique dans la ressource, comme une partie d'une page web.

### Question 6

Voici les familles de codes de statut HTTP :

- 1xx - Informations

100 Continue : Le client peut continuer à envoyer le reste de la requête.
- 2xx - Succès

200 OK : La requête a réussi et la réponse contient les informations demandées.
201 Created : Une nouvelle ressource a été créée avec succès.
- 3xx - Redirection

301 Moved Permanently : La ressource a été déplacée définitivement à une nouvelle URL.
302 Found : La ressource a été temporairement déplacée à une nouvelle URL.
- 4xx - Erreur du client

404 Not Found : La ressource demandée est introuvable.
403 Forbidden : L'accès à la ressource est interdit.
- 5xx - Erreur du serveur

500 Internal Server Error : Erreur interne du serveur empêchant le traitement de la requête.
502 Bad Gateway : Le serveur a reçu une réponse invalide d'un autre serveur.
