import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, KeyboardAvoidingView, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Firebase config
import { auth } from '../../firebase';

// REDUX
import { useDispatch } from 'react-redux';
import { userConnected } from '../redux/actions';

const { width } = Dimensions.get('window');

const textLogin = 'Introduisez votre adresse e-mail et votre mot de passe pour accéder à votre compte.';

const textNextStepRegister = 'Accéder à votre boite e-mail pour valider votre compte, puis connectez-vous';

const LoginScreen = ({ route, navigation }) => {

    // REDUX fonction dispatch (envoi des données du store)
    const dispatch = useDispatch()

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

        if ( route.params != undefined ) {
            return true
        } else {
            return false
        }
    }; 

    // Connexion à Firebase
    const handlerLogin = () => {

        auth
         .signInWithEmailAndPassword(email, password)
         .then(userCredentials => {

            const user = userCredentials.user;
            console.log('Connexion avec : ', user.email)
            dispatch(userConnected(user.email))
            navigation.navigate('Accueil')
        })
        .catch(error => alert(error.message))
    }
    
    return (

        <View style = { styles.container }>

            <View style = {{ alignItems: 'center', marginTop: 20 }}>

                <FontAwesome name="user-circle-o" size={64} color="black" />

                <Text style = {[ styles.textStyle, { marginTop: 10 }]}>
                    { onChangeStepRegister() ? textNextStepRegister : textLogin }
                </Text>
            </View>

            <ScrollView style = { styles.scrollView }>

                <View style = {{ alignItems: 'center' }}>

                    <View style = {{ marginVertical: 20 }}>

                        <Text style = { styles.viewContent }>
                            Adresse E-mail :
                        </Text>

                        <TextInput style = { styles.backgroundStyle }
                            placeholder = "Votre Adresse E-mail"
                            value = { email }
                            onChangeText = { onChangeEmail }
                            keyboardType = 'email-address'
                            // onEndEditing = { checkEmail }
                        />
                    </View>

                    <View>

                        <Text style = { styles.viewContent }>
                            Mot de passe :
                        </Text>

                        <TextInput style = {[ styles.backgroundStyle, { marginBottom: 40 }]}
                            placeholder = "*****"
                            value = { password }
                            onChangeText = { onChangePassword }
                            secureTextEntry
                        />

                        <Button
                            onPress={ handlerLogin }
                            title= 'Connexion'
                            color= "#06d6a0"
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#fff',
    },
    scrollView: {
        width : width,
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