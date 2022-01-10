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
    },
    user2: {},
    user3: {},
    user4: {},
    user5: {}
};

export default userDelivery;