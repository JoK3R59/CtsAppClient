import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';

const _DataRegister = () => {

    const [ lastName, setLastName ] = useState('')

    const onChangeLastName = value => {
        setLastName(value)
    };

    const [ firstName, setFirstName ] = useState('')

    const onChangeFirstName = value => {
        setFirstName(value)
    };

    const [ againPassword, setAgainPassword ] = useState('')

    const onChangeAgainPassword = value => {
        setAgainPassword(value)
    };

    return (
        <View style = {{ alignItems: 'center', justifyContent: 'center' }}>

            <View>

                <Text>Nom :</Text>
                
                <TextInput style = { styles.backgroundStyle }
                    placeholder = "Votre Nom"
                    value = { lastName }
                    onChangeText = { onChangeLastName }
                />
            </View>

            <View>

                <Text>Prénom :</Text>
                
                <TextInput style = { styles.backgroundStyle }
                    placeholder = "Votre Prénom"
                    value = { firstName }
                    onChangeText = { onChangeFirstName }
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

export default _DataRegister;