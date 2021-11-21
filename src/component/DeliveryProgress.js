import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DeliveryProgress = () => {
    return (
        <View style = {[styles.box, { flexDirection : "row" }]}>

            <View style = { styles.content }>

                <Text>2 Produits</Text>
            </View>

            <View style = {[styles.content, { flexDirection : "column" }]}>

                <Text>Mardi 25 Septembre</Text>

                <Text>17h00 ~ 19h00</Text>

                <Text>En cours de livraison</Text>
            </View>

            <View style = { styles.content }>
                
                <Text>{'>'}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create ({
    header: {
        backgroundColor: `#f0f8ff`,
        width: '100%',
        borderWidth: 0.5,
        padding: 10,
        fontSize: 24
    },
    box: {
        marginTop: 12,
        marginBottom: 12,
        padding: 10,
        borderWidth: 0.5,
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 12,
        paddingRight: 12
    }
});

export default DeliveryProgress;