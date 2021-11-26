import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const textLogin = 'Introduisez votre adresse e-mail et votre mot de passe pour accéder à votre compte.';

const textNextStepRegister = 'Accéder à votre boite e-mail pour valider votre compte, puis connectez-vous';

const LoginScreen = (nextSTepRegister) => {

    const [ email, setEmail ] = useState('')

    const onChangeEmail = value => {
        setEmail(value)
    };

    const [ password, setPassword ] = useState('')

    const onChangePassword = value => {
        setPassword(value)
    };
    
    return (

        <View style = { styles.container }>

            <Text style = { styles.textStyle }>
                { !nextSTepRegister ? textNextStepRegister : textLogin }
            </Text>

            <View style = { styles.viewContent }>

                <Text>Utilisateur :</Text>

                <TextInput style = { styles.backgroundStyle }
                 placeholder = "Votre Adresse E-mail"
                 value = { email }
                 onChangeText = { onChangeEmail }
                />
            </View>

            <View style = {[ styles.viewContent, { marginBottom: 64 }]}>

                <Text>Mot de passe :</Text>

                <TextInput style = { styles.backgroundStyle }
                 placeholder = "*****"
                 value = { password }
                 onChangeText = { onChangePassword }
                />
            </View>

            <Button
             onPress={ () => {}}
             title= 'Connexion'
             color= "#06d6a0"
            />


        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#fff'
    },
    textStyle: {
        textAlign: 'center',
        marginHorizontal: 110,
        marginVertical: 50
    },
    viewContent: {
        marginVertical: 8
    },
    backgroundStyle: {
        backgroundColor: '#f0eeee',
        padding: 10,
        height: 40,
        width: 200,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray',
        marginTop: 8
    }
});

export default LoginScreen;