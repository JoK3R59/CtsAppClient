import React from 'react';
import { View, Text, StyleSheet, Button, Dimensions } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

// Gestion du statut Login dans HomeScreen
// true = utilisateur enregistré || false = utilisateur non enregistré
const loginStatut = false;

const { width } = Dimensions.get('window');

const _subLogin = ({ navigation }) => {

    if (!loginStatut) {

        return (
            
            <View style = { styles.container }>
    
                <Button
                onPress={ () => {
                    navigation.navigate('Inscription')
                }}
                title="Inscription"
                color="#841584"
                />

                <Button
                onPress={ () => {
                    navigation.navigate('Connexion')
                }}
                title="Connexion"
                color="#06d6a0"
                />
            </View>
        )
    } else {

        return (

            <View style = { styles.container }>
    
                <Text style = { styles.font }>
                    Bonjour Utilisateur ! 
                </Text>
    
                <FontAwesome5 name="hand-spock" size={48} color="black" style = {{ marginLeft: 10 }}/>
            </View>
        )
    }
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        // justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        maxHeight: 80,
        width: '100%',
        borderWidth: 0.5,
        backgroundColor: 'white',
        width: width
    },
    font: {
        fontSize: 24,
        fontWeight: 'bold'
    }
});

export default _subLogin;