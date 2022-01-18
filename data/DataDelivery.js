const userDelivery = {
    user1: {
        idUser: 1, // ID utilisateur
        item: 2, // nombre de colis
        timetableFirst: "17h00", // Horaire d'ouverture pour livraison
        timetableSecond: "19h00", // Horaire dde fermeture pour livraison
        // 0=ERROR | 1=Enlèvement | 2=En cours | 3=Livré | 4= Incident
        deliveryStatut: 2, // Statut de la livraison
        madeDate: 'Samedi 22 Septembre', // date de la mise en ligne
        date: "Mardi 25 Septembre", // date de réception prévu
        address : { // REVOIR la mise en place de ADDRESS et Packages pour la liste de données
            user: {
                city: 'Mauffans',
                number: '1',
                street: 'Rue du cul du putois',
                zipCode: '99000'
            },
            pickupAddress: {
                city: 'Coutances',
                number: '1',
                street: 'Rue du pou-qui-grimpe',
                zipCode: '99000'
            }
        },
        packages: [
            {
                id: 0,
                quantity: '1',
                name: 'Canapé Scandinave 3',
                weight: '45'
            },
            {
                id: 1,
                quantity: '1',
                name: 'TV Oled LG 65CX6',
                weight: '18'
            }
        ],
        note: 'Klaxonner devant la maison pour que je vous aide.'
    },
    user2: {},
    user3: {},
    user4: {},
    user5: {}
};

export default userDelivery;