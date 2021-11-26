import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import { auth } from '../utils/helpers';

import _UserRegister from './_registration/_UserRegister';
import _DataRegister from './_registration/_DataRegister';
import _LoginBtn from './_login/_LoginBtn';

const { width } = Dimensions.get('window');

const RegistrationScreen = ({ navigation }) => {

    const [ stepRegister, setStepRegister ] = useState(false)

    const [ titleButton, setTitleButton ] = useState('Suivant')

    const onChangeStepRegister = () => {

        if (titleButton === 'Terminer') {
            navigation.navigate('Connexion', {nextSTepRegister : true})
        }
        setStepRegister(true)
        setTitleButton('Terminer')
        setIconUserActive('black')
        setIconAccountActive('#8102d2')
    };
    
    const [ iconUserActive, setIconUserActive ] = useState('#8102d2')

    const [ iconAccountActive, setIconAccountActive ] = useState('black')

    const handleLogin = () => {
        auth()
    };
    
    return (

        <View style = { styles.container }>

            <View style = { styles.statusContainer }>

                <View
                 style = { !stepRegister ?
                 [styles.statusContent, styles.iconActive] :
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
                 [styles.statusContent, styles.iconActive] :
                 styles.statusContent }
                >

                    <MaterialCommunityIcons name="card-account-details-outline"
                     size={ 32 }
                     color={ iconAccountActive }
                    />

                    <Text style = {{ color: iconAccountActive }}>Données</Text>
                </View>
            </View>

            { !stepRegister ? <_UserRegister /> : <_DataRegister />}

            <Button
             onPress={ () => { onChangeStepRegister() }}
             title= { titleButton }
             color= "#841584"
            />

            <_LoginBtn onPress = { handleLogin }/>
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