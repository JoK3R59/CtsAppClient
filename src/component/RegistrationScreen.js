import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Button } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import _UserRegister from './_registration/_UserRegister';

const { width } = Dimensions.get('window');

const RegistrationScreen = () => {
    
    return (

        <View style = { styles.container }>

            <View style = { styles.statusContainer }>

                <View style = { styles.statusContent }>

                    <FontAwesome name="user"
                     size = { 32 }
                     color= '#8102d2'
                    />

                    <Text>Compte</Text>
                </View>

                <View style = { styles.statusContent }>

                    <MaterialCommunityIcons name="card-account-details-outline"
                     size={ 32 }
                     color="black"
                    />

                    <Text>Données</Text>
                </View>
            </View>

            <_UserRegister />

            <Button
             onPress={ () => {}}
             title= "Suivant"
             color="#841584"
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    statusContainer: {
        flexDirection:'row',
        justifyContent: 'space-around',
        width: width,
    },
    statusContent: {
        flexDirection:'column',
        alignItems: 'center',
        marginVertical: 12,
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderBottomWidth: 3,
        borderColor: '#8102d2'
    }
});

export default RegistrationScreen;