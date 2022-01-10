import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import _RequestContent from './_RequestContainer/_RequestContent';

import userDelivery from '../../data/DataDelivery';

const DeliveryRequest = ({ windowWidth }) => {

    return (
        <View>

            <Text style = {[ styles.header, { width: windowWidth }]}>
                    Demande de livraison :
            </Text>
            
            <View style = { styles.content }>

                <_RequestContent item={userDelivery}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create ({
    // header: {
    //     backgroundColor: `#f0f8ff`,
    //     width: '100%',
    //     borderWidth: 0.5,
    //     padding: 10,
    //     fontSize: 24
    // },
    // box: {
    //     marginTop: 12,
    //     marginBottom: 12,
    //     padding: 10,
    //     borderWidth: 0.5,
    // },
    // content: {
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     paddingLeft: 12,
    //     paddingRight: 12
    // }
    header: {
        backgroundColor: `#f0f8ff`,
        borderWidth: 0.5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 24
    },
    content: {
        marginHorizontal: 30
    }
});

export default DeliveryRequest;