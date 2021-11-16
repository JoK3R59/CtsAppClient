------------------
db name:"cts_app_db"
------------------
------------------
collections
------------------
client
commande
produit
tracking_commande
livreur
entreprise
rep_incident

-------------------------------------------------
importer/exporter la base de données dans mongodb
-------------------------------------------------
mongodump --db cts_app_db --out <file>

mongorestore --db cts_app_db <directory_backup_where_mongodb_tobe_restored>