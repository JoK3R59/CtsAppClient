import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform, Button, Dimensions } from 'react-native';

// REDUX
import { onChangeStepRegister, addUser } from '../../redux/actions'

const { width } = Dimensions.get('window');

const _UserRegister = ({dispatch}) => {

    const [ email, setEmail ] = useState('')

    const onChangeEmail = value => {
        setEmail(value)
    };

    const [ password, setPassword ] = useState('')

    const onChangePassword = value => {
        setPassword(value)
    };

    const [ againPassword, setAgainPassword ] = useState('')

    const onChangeAgainPassword = value => {
        setAgainPassword(value)
    };

    const [ errorPassword, setErrorPassword ] = useState(false)

    const [ errorEmail, setErrorEmail ] = useState(false)

    const [ placeholderTextPassword, setPlaceholderTextPassword ] = useState('******')

    const [ placeholderTextEmail, setPlaceholderTextEmail ] = useState('VotreAdresse@Email.fr')

    // Function permettant de vérifier l'Email valide
    const checkEmail = () => {

        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(email)) {

            setErrorEmail(true)
            setEmail('')
            setPlaceholderTextEmail('E-mail non valide')
        } else {
            setErrorEmail(false)
        }
    }

    // Function permettant de récupérer/vérifier l'Email et Password Valide lors de l'inscription
    const onNextStepRegister = ( dispatch, email, password, againPassword ) => {   

        // vérification du contenu input d'Email
        if ( email === '' ) {

            setErrorEmail(true)
            setPlaceholderTextEmail('E-mail non valide')
        }

        // Vérification du Mot de passe
        if ( password != againPassword ) {

            setPassword('')
            setAgainPassword('')
            setPlaceholderTextPassword("Mot de passe non identique")
            setErrorPassword(true)
        } else if ( password.length < 6 ) {

            setPassword('')
            setAgainPassword('')
            setPlaceholderTextPassword("6 caractères minimum")
            setErrorPassword(true)
        }

        // Si le Mot de passe est correct ainsi que l'Email
        if ( password === againPassword && password.length >= 6 && !errorEmail ) {
            
            let newUser = {
                email,
                password
            }
            dispatch(addUser(newUser))
            dispatch(onChangeStepRegister(true))
        }
    };

    return (

        <KeyboardAvoidingView
            style = {{ alignItems: 'center', justifyContent: 'center' }}
            behavior= {Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style = {{ alignItems: 'center', justifyContent: 'center', width: width }}>
                
                <View style = {{ marginVertical: 36 }}>

                    <Text>Adresse E-mail :</Text>
                    
                    <TextInput style = { errorEmail ? styles.errorInputStyle : styles.inputStyle }
                        placeholder = { placeholderTextEmail }
                        value = { email }
                        onChangeText = { onChangeEmail }
                        keyboardType = 'email-address'
                        onEndEditing = { checkEmail }
                    />
                </View>

                <View style = {{ marginVertical: 8, marginBottom: 64 }}>

                    <Text>Mot de passe :</Text>
                    
                    <TextInput 
                        style = {[ 
                            errorPassword ? styles.errorInputStyle : styles.inputStyle,
                            { marginBottom: 10 }
                        ]}
                        placeholder = { placeholderTextPassword }
                        value = { password }
                        onChangeText = { onChangePassword }
                        secureTextEntry
                    />

                    <Text>Confirmer mot de passe :</Text>
                    
                    <TextInput style = { errorPassword ? styles.errorInputStyle : styles.inputStyle }
                        placeholder = { placeholderTextPassword }
                        value = { againPassword }
                        onChangeText = { onChangeAgainPassword }
                        secureTextEntry
                    />
                </View>

                <Button
                    onPress={() => { onNextStepRegister(dispatch, email, password, againPassword) }}
                    title= 'Suivant'
                    color= "#841584"
                />
            </View>
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    inputStyle: {
        backgroundColor: '#f0eeee',
        padding: 10,
        height: 40,
        width: 200,
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8
    },
    errorInputStyle: {
        borderColor: 'red',
        backgroundColor: '#f0eeee',
        padding: 10,
        height: 50,
        width: 200,
        borderRadius: 5,
        borderWidth: 2,
        marginTop: 8
    }
});

export default _UserRegister;