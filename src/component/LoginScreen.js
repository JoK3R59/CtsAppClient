import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const textLogin = 'Introduisez votre adresse e-mail et votre mot de passe pour accéder à votre compte.';

const textNextStepRegister = 'Accéder à votre boite e-mail pour valider votre compte, puis connectez-vous';

const LoginScreen = ({ route }) => {

    // console.log(route.params)

    const [ email, setEmail ] = useState('')

    const onChangeEmail = value => {
        setEmail(value)
    };

    const [ password, setPassword ] = useState('')

    const onChangePassword = value => {
        setPassword(value)
    };

    // function permettant de vérifier si l'utilisateur provient de la page Inscription, ainsi le texte de la page Connexion changera
    const onChangeStepRegister = () => {

        if ( route.params !== undefined ) {
            return true
        } else {
            return false
        }
    };
    
    return (

        <View style = { styles.container }>

            <FontAwesome name="user-circle-o" size={64} color="black" />

            <Text style = { styles.textStyle }>
                { onChangeStepRegister() ? textNextStepRegister : textLogin }
            </Text>

            <View>

                <Text style = { styles.viewContent }>
                    Utilisateur :
                </Text>

                <TextInput style = { styles.backgroundStyle }
                 placeholder = "Votre Adresse E-mail"
                 value = { email }
                 onChangeText = { onChangeEmail }
                />
            </View>

            <View style = {{ marginBottom: 64 }}>

                <Text style = { styles.viewContent }>
                    Mot de passe :
                </Text>

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
        justifyContent: 'space-evenly',
        backgroundColor: '#fff'
    },
    textStyle: {
        textAlign: 'center',
        marginHorizontal: 110
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
        borderColor: 'gray'
    }
});

export default LoginScreen;