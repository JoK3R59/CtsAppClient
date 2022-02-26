import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Button, ScrollView } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import _UserRegister from './_registration/_UserRegister';
import _DataRegister from './_registration/_DataRegister';
import _LoginBtn from './_login/_LoginBtn';

//** */ authentification Google
//** */ import { auth } from '../utils/helpers';

// Firebase config
import { auth } from '../../firebase';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { nextStepRegister, endChangeStepRegister, claimDataUser, claimNewUser } from '../redux/selectors';

// width permet d'obtenir la dimension du mobile Horizontalement 
const { width, height } = Dimensions.get('window');
// console.log(width, height);

const RegistrationScreen = ({ navigation, goBack }) => {

    // TODO faire la configuration du bouton retour pour aller a Home
    // console.log(navigation)
    
    // stepRegister permet d'afficher les Etapes d'inscription - false = Compte / true = Données
    const [ stepRegister, setStepRegister ] = useState(false)

    // // titleButton permet d'afficher le texte du bouton d'inscription - Suivant / Terminer
    // const [ titleButton, setTitleButton ] = useState('Suivant')
    
    // iconUserActive permet d'afficher la couleur de l'icon Compte - actif / non-actif
    const [ iconUserActive, setIconUserActive ] = useState('#8102d2')

    // iconAccountActive permet d'afficher la couleur de l'icon Données - actif / non-actif
    const [ iconAccountActive, setIconAccountActive ] = useState('black')

    //** */ handleLogin methode permettant d'activer la fonction auth provenant du bouton Google
    //** */ const handleLogin = () => {
    //** */     auth()
    //** */ };

    // REDUX fonction dispatch (envoi des données du store)
    const dispatch = useDispatch()

    // REDUX fonction useSelector (recupérations des données du store)
    const nextStep = useSelector(nextStepRegister)
    const endStep = useSelector(endChangeStepRegister)
    const userID = useSelector(claimNewUser)
    const dataID = useSelector(claimDataUser)

    // Ecouteur d'événements
    useEffect(() => {

        nextStep === true ? onChangeStepRegister() : null
        endStep === true ? endStepRegister() : null
    })

    // methode permettant de changer les états lors de l'inscription
    const onChangeStepRegister = () => {

        setStepRegister(true)
        setIconUserActive('black')
        setIconAccountActive('#8102d2')
    };

    // methode permettant de terminer l'état lors de l'inscription
    const endStepRegister = () => {

        handlerSignUp(userID)
        console.log('utilisateur :', userID)
        console.log('données utilisateur :', dataID)
        navigation.replace('Connexion', { completeStepRegister : true })
    }

    // Inscription sur FIREBASE
    const handlerSignUp = (userID) => {
        auth
         .createUserWithEmailAndPassword(userID.email, userID.password)
         .then(userCredentials => {
             const user = userCredentials.user;
             console.log('Inscription avec : ', user.email)
         })
         .catch(error => alert(error.message))
    }

    return (

        <View style = { styles.container }>

            <View style = { styles.statusContainer }>

                <View
                 style = { !stepRegister ?
                 [ styles.statusContent, styles.iconActive ] :
                 styles.statusContent }
                >

                    <FontAwesome name="user"
                     size={ 32 }
                     color={ iconUserActive }
                    />

                    <Text style = {{ color: iconUserActive }}>Compte</Text>
                </View>

                <View
                 style = { stepRegister ?
                 [ styles.statusContent, styles.iconActive ] :
                 styles.statusContent }
                >

                    <MaterialCommunityIcons name="card-account-details-outline"
                     size={ 32 }
                     color={ iconAccountActive }
                    />

                    <Text style = {{ color: iconAccountActive }}>Données</Text>
                </View>
            </View>

            <ScrollView>

                { !stepRegister ?
                 <_UserRegister dispatch={dispatch}/> :
                 <_DataRegister dispatch={dispatch}/>
                }

                {/* <Button
                onPress={ () => { onChangeStepRegister() }}
                title= { titleButton }
                color= "#841584"
                /> */}
                
                {/* { !stepRegister ? <_LoginBtn onPress = { handleLogin }/> : null } */}
            </ScrollView>
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
    },
    iconActive: {
        borderBottomWidth: 3,
        borderColor: '#8102d2'
    }
});

export default RegistrationScreen;