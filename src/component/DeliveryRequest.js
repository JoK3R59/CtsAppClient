import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import _RequestContent from './_RequestContainer/_RequestContent';
import _defaultRequest from './_RequestContainer/_defaultRequest';

import userDelivery from '../../data/DataDelivery';

// REDUX
import { useSelector } from 'react-redux';
import { claimUserConnected } from '../redux/selectors';

const DeliveryRequest = ({ windowWidth }) => {

    useEffect(() => {

        statutConnected ? setChangeDefaultRequest(true) : setChangeDefaultRequest(false)
    })

    const [ changeDefaultRequest, setChangeDefaultRequest ] = useState(false)

    const statutConnected = useSelector(claimUserConnected)

    return (
        <View>

            <Text style = {[ styles.header, { width: windowWidth }]}>
                Demande de livraison :
            </Text>
            
            <View style = { styles.content }>

                { !changeDefaultRequest ? <_defaultRequest/> : <_RequestContent item={userDelivery}/>}
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

export default DeliveryRequest;