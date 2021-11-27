import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DeliveryRequest = () => {

    return (
        
        <View style = {[ styles.box, { flexDirection : "row" }]}>

            <View style = { styles.content }>
                
                <Text>2 Produits</Text>
            </View>

            <View style = {[ styles.content, { flexDirection : "column" }]}>

                <View>

                    <Text>Fait le :</Text>

                    <Text>Samedi 22 Septembre</Text>
                </View>

                <View>

                    <Text>Prévu pour :</Text>

                    <Text>Mardi 25 Septembre</Text>
                </View>
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

export default DeliveryRequest;