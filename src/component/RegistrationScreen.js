import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';

const RegistrationScreen = () => {

    const [ textEmail, setTextEmail ] = useState('')

    const onChangeTextEmail = value => {
        setTextEmail(value)
    };

    const [ textPassword, setTextPassword ] = useState('')

    const onChangeTextPassword = value => {
        setTextPassword(value)
    };

    const [ textAgainPassword, setTextAgainPassword ] = useState('')

    const onChangeTextAgainPassword = value => {
        setTextAgainPassword(value)
    };
    
    return (

        <View style = { styles.container }>

            <Text>Registration Screen</Text>

            <View>

                <Text>Adresse E-mail :</Text>
                
                <TextInput style = { styles.backgroundStyle }
                 placeholder = "VotreAdresse@Email.fr"
                 value = { textEmail }
                 onChangeText = { onChangeTextEmail }
                />
            </View>

            <View>

                <Text>Mot de passe :</Text>
                
                <TextInput style = { styles.backgroundStyle }
                 placeholder = "*****"
                 value = { textPassword }
                 onChangeText = { onChangeTextPassword }
                />
            </View>

            <View>

                <Text>Confirmer mot de passe :</Text>
                
                <TextInput style = { styles.backgroundStyle }
                 placeholder = "*****"
                 value = { textAgainPassword }
                 onChangeText = { onChangeTextAgainPassword }
                />
            </View>
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
    backgroundStyle: {
        backgroundColor: '#f0eeee',
        padding: 10,
        height: 40,
        width: 200,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray'
    }
});

export default RegistrationScreen;