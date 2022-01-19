import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import _ProgressBar from '../../_shared/_ProgressBar';
import _packageWeight from '../../_shared/_packageWeight';

const _extandedProgress = ({ data }) => {

    const pickupAddress = data.address.pickupAddress;
    const userAddress = data.address.user;

    const renderPackages = ({ item }) => (

        <View style={{ flexDirection:'row' }}>
            <View style={{ flex: 1, marginLeft: 20 }}>
                <Text>{ item.quantity.toString() }</Text>
            </View>
            <View style={{ flex: 3 }}>
                <Text>{ item.name }</Text>
            </View>
            <View style={{ flex: 1 }}>
                <_packageWeight weight={ item.weight }/>
            </View>
        </View>
    );

    return (
        
        <View style = {{ flexDirection : "column" }}>

            <View style = { styles.dateHour }>

                <Text style = {{ fontWeight: 'bold', fontSize: 20 }}>
                    { data.date }
                </Text>

                <Text>{ data.timetableFirst } ~ { data.timetableSecond }</Text>
            </View>

            <View style = {{ alignItems: 'center' }}>

                <View style = {{ flexDirection : 'row' }}>

                    <AntDesign name="checksquare" size={18} color="black" />

                    <Text style = {{ paddingLeft : 5 }}>- Adresse d'enlèvement</Text>
                </View>

                <Text>{ pickupAddress.number } { pickupAddress.street }, à { pickupAddress.city }.</Text>

                <Text>{ pickupAddress.zipCode }</Text>

                {/* ESPACE A AJOUTER POUR AFFICHER DES LIGNES */}

                <View style = {{ flexDirection : 'row' }}>

                    <AntDesign name="minussquare" size={18} color="black" />

                    <Text style = {{ paddingLeft : 5 }}>- Adresse de livraison</Text>
                </View>

                <Text>{ userAddress.number } { userAddress.street }, à { userAddress.city }.</Text>

                <Text>{ userAddress.zipCode }</Text>
            </View>

            <View style = { styles.boxContent }>

                <FlatList
                 data={ data.packages}
                 renderItem={ renderPackages }
                 keyExtractor={(item) => item.id.toString()} 
                />
            </View>

            <View style = {{ marginVertical: 5 }} >

                <_ProgressBar deliveryStatut={ data.deliveryStatut } params={{ height : 20, width : 200 }}/>
            </View>

            <View style = {{ marginLeft: 5 }}>

                <Text>Note pour livreur :</Text>

                <View style = { styles.borderNote }>

                    <Text>- { data.note }</Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create ({
    dateHour: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 16,
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxContent: {
        marginVertical: 5,
        paddingVertical: 5,
        paddingHorizontal: 8,
        borderRadius: 50,
        borderBottomWidth: 2,
        borderTopWidth: 2
    },
    borderNote: {
        margin: 5,
        padding: 5,
        borderWidth: 2
    }
});

export default _extandedProgress;