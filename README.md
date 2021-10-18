# Clic_Truck_Service-APP_Client
Project APP mobil for customer

*****************************************
*****************************************

## /!\ AIDE -> GitHub 

### Gestion des fichiers

- `git add [filename]` : ajoute les modifications faites dans le fichier à l'index
- `git add .`, _alias, technique du bourrin_ : ajoute les modifs de tous les fichiers dans le dossier  
/!\ à n'utiliser si on est sûr de n'avoir fait QUE des modifs liées au commit en cours !
- `git reset HEAD` : annule les `add` déjà faits
- `git commit [-m "message de commit"]` : enregistre les modifs indexées dans le commit
- `git push` : envoie tous les commits locaux sur le repo  
- `git pull` : récupère en local un projet depuis le repo, pour un projet déjà en cours (au contraire de clone qu'on utiliser uniquement pour un nouveau projet)  
- `git rm --cached <file(s)>` : **supprimer des fichiers suivis du repo** qui auraient été ajoutés par erreur OU **ajoutés dans le .gitignore par la suite** (ne supprime pas le fichier lui-même en local, bien entendu, uniquement dans le dépôt).

### Vérifier l'état courant du repo local

- `git status` : récapitule l'état local (workspace et index) des fichiers du projet géré avec Git
  - En rouge : modifié mais non pris en compte (= en workspace)  
  - En vert : modifié et pris en compte (= ajouté à l'index)

### Branches

- `git branch nomDeLaBranche` : crée une nouvelle branche (nouvelle version du projet) identique à la version HEAD - permet de tester des développements (réparer un bug, expérimenter une nouvelle fonctionnalité...) et commiter sans affecter la branche principale
- `git checkout nomDeLaBranche` : bascule sur la branche nomDeLaBranche
- :bulb: `git checkout -b nomDeLaBranche` : permet de réaliser les deux opérations du dessus (création de la branche & migration sur celle-ci)
- Tu envoies tes modifications sur le remote `origin`, sur GitHub. Ou tout du moins tu essayes :
    1. Non, ça ne va pas fonctionner tout de suite ! Eh oui, ta nouvelle branche n'existe pas sur le remote `origin`…
    2. mais **git** est intelligent et te donne la ligne de commande à exécuter pour créer la branche distante sur `origin` et faire un _push_ qui fonctionne !
- `git merge nomDeLaBranche` : rattache ma branche au master de la branche principale (master) ==> nécessite de résoudre les conflits !


Pour un dossier de travail donné, Git manipule différents « espaces virtuels » :

- **_Workspace_** : espace stockant les modifications en cours, **qui ne sont pas (encore) prises en compte** par Git.
- **_Index (ou stage)_** : espace stockant les modifications en cours, **qui seront prises en compte par Git pour le prochain commit (mais pas encore commitées)**.
- **_Local repository_** : espace stockant les modifications **déjà prises en compte par Git**.
- **_Remote repository_** : désigne le dépôt distant (_remote_, sur GitHub par exemple), dépôt auquel est relié votre dépôt local. **Les commits du _local repository_ doivent y être pushés pour mettre le dépôt distant à jour** et collaborer avec d'autres personnes.
