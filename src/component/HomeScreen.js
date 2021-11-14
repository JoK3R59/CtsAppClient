import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import _subLogin from '../_shared/_subLogin';

const HomeScreen = ( props ) => {

    return (

        <View  style = { styles.container }>

            <_subLogin />

            <Text style = { styles.header }>
                Livraison en cours... :
            </Text>

            <Text style = { styles.header }>
                Demande de livraison :
            </Text>
        </View>
    )
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 'auto'
    },
    header: {
        backgroundColor: `#f0f8ff`,
        width: '100%',
        borderWidth: 0.5,
        padding: 10,
        fontSize: 24
    }
});

export default HomeScreen;