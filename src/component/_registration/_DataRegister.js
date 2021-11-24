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

    const [ phoneNumber, setPhoneNumber ] = useState('')

    const onChangePhoneNumber = value => {

        setPhoneNumber(value)
    };

    return (
        <View style = {{ alignItems: 'center', justifyContent: 'center' }}>

            <View>

                <View style = { styles.viewContent }>

                    <Text>Nom :</Text>
                    
                    <TextInput style = { styles.backgroundStyle }
                     placeholder = "Votre nom"
                     value = { lastName }
                     onChangeText = { onChangeLastName }
                    />
                </View>

                <View style = { styles.viewContent }>

                    <Text>Prénom :</Text>
                    
                    <TextInput style = { styles.backgroundStyle }
                     placeholder = "Votre prénom"
                     value = { firstName }
                     onChangeText = { onChangeFirstName }
                    />
                </View>

                <View style = { styles.viewContent }>

                    <Text>Numéros de téléphone :</Text>
                    
                    <TextInput style = { styles.backgroundStyle }
                     placeholder = "0102030405"
                     value = { phoneNumber }
                     onChangeText = { onChangePhoneNumber }
                    />
                </View>
            </View>

            <View>

                <View style = { styles.viewContent }>

                    <Text>Adresse :</Text>

                    <TextInput style = { styles.backgroundStyle }
                     placeholder = "Votre adresse"
                     value = { lastName }
                     onChangeText = { onChangeLastName }
                    />
                </View>

                <View style = { styles.viewContent }>

                    <Text>Code Postal :</Text>
                    
                    <TextInput style = { styles.backgroundStyle }
                     placeholder = "01234"
                     value = { lastName }
                     onChangeText = { onChangeLastName }
                    />
                </View>

                <View style = {[ styles.viewContent, { marginBottom: 32 } ]}>

                    <Text>Ville :</Text>
                    
                    <TextInput style = { styles.backgroundStyle }
                     placeholder = "Votre ville"
                     value = { lastName }
                     onChangeText = { onChangeLastName }
                    />
                </View>
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
    },
    viewContent: {
        marginVertical: 8
    }
});

export default _DataRegister;