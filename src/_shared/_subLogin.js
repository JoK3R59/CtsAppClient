import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

const _subLogin = ( props ) => {

    return (

        <View style = { styles.container }>

            <Text style = { styles.font }>
                Bonjour Utilisateur ! 
            </Text>

            <FontAwesome5 name="hand-spock" size={48} color="black" style = {{ marginLeft: 10 }}/>
        </View>
    )
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        maxHeight: 100,
        width: '100%',
        borderWidth: 0.5,
        backgroundColor: 'white'
    },
    font: {
        fontSize: 24,
        fontWeight: 'bold'
    }
});

export default _subLogin;