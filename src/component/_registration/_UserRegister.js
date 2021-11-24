import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';

const _UserRegister = () => {

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

    return (
        <View style = {{ alignItems: 'center', justifyContent: 'center' }}>

            <View style = {{ marginVertical: 36 }}>

                <Text>Adresse E-mail :</Text>
                
                <TextInput style = { styles.backgroundStyle }
                    placeholder = "VotreAdresse@Email.fr"
                    value = { email }
                    onChangeText = { onChangeEmail }
                />
            </View>

            <View style = {{ marginVertical: 8 }}>

                <Text>Mot de passe :</Text>
                
                <TextInput style = { styles.backgroundStyle }
                    placeholder = "*****"
                    value = { password }
                    onChangeText = { onChangePassword }
                />
            </View>

            <View style = {{ marginVertical: 8, marginBottom: 64 }}>

                <Text>Confirmer mot de passe :</Text>
                
                <TextInput style = { styles.backgroundStyle }
                    placeholder = "*****"
                    value = { againPassword }
                    onChangeText = { onChangeAgainPassword }
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
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

export default _UserRegister;