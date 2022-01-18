import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import _ProgressBar from '../../_shared/_ProgressBar';
import _packageWeight from '../../_shared/_packageWeight';

const _extandedProgress = ({ data }) => {

    const pickupAddress = data.address.pickupAddress;
    const userAddress = data.address.user;

    const renderPackages = ({ item }) => (

        <View style={{ flexDirection:'row', justifyContent: 'space-between' }}>

            <Text>{ item.quantity }</Text>
            <Text>{ item.name }</Text>
            <_packageWeight weight={ item.weight }/>
        </View>
    );
    console.log(data.packages[0].quantity)

    return (
        
        <View style = {{ flexDirection : "column" }}>

            <View style = { styles.dateHour }>

                <Text style = {{ fontWeight: 'bold' }}>
                    { data.date }
                </Text>

                <Text>{ data.timetableFirst } ~ { data.timetableSecond }</Text>
            </View>

            <View style = {{ marginLeft : 5 }}>

                <View style = {{ flexDirection : 'row' }}>

                    <AntDesign name="checksquare" size={18} color="black" />

                    <Text style = {{ paddingLeft : 5 }}>- Adresse d'enlèvement.</Text>
                </View>

                <Text>{ pickupAddress.number } { pickupAddress.street }, à { pickupAddress.city }.</Text>

                <Text>{ pickupAddress.zipCode }.</Text>

                <View style = {{ flexDirection : 'row' }}>

                    <AntDesign name="minussquare" size={18} color="black" />

                    <Text style = {{ paddingLeft : 5 }}>- Adresse de livraison.</Text>
                </View>

                <Text>{ userAddress.number } { userAddress.street }, à { userAddress.city }.</Text>

                <Text>{ userAddress.zipCode }.</Text>
            </View>

            <View style = { styles.boxContent }>

                <FlatList
                 data={ data.packages}
                 renderItem={ renderPackages }
                 keyExtractor={ item => item.id }
                />
            </View>

            <View style = {{ marginVertical: 5 }} >

                <_ProgressBar deliveryStatut={ data.deliveryStatut }/>
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
        justifyContent: 'space-around'
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