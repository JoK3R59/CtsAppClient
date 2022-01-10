import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import _ProgressContent from './_ProgressContainer/_ProgressContent';

import userDelivery from '../../data/DataDelivery';

const DeliveryProgress = ({ windowWidth }) => {

    return (
        
        <View>

            <Text style = {[ styles.header, { width: windowWidth }]}>
                Livraison en cours... :
            </Text>

            <View style = { styles.content }>

                <_ProgressContent item={userDelivery}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create ({
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

export default DeliveryProgress;