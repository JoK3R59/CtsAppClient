import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Dimensions, Button } from 'react-native';

// REDUX
import { completeStepRegister, addDataUser } from '../../redux/actions'

const { width } = Dimensions.get('window');

const _DataRegister = ({dispatch}) => {

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

    const [ adress, setAdress ] = useState('')

    const onChangeAdress = value => {

        setAdress(value)
    };

    const [ zipCode, setZipCode ] = useState('')

    const onChangeZipCode = value => {

        setZipCode(value)
    };

    const [ city, setCity ] = useState('')

    const onChangeCity = value => {

        setCity(value)
    };

    const completeEndStepRegister = (
        lastName,
        firstName,
        phoneNumber,
        adress,
        zipCode,
        city
    ) => {

        let dataUser = {
            lastName,
            firstName,
            phoneNumber,
            adress,
            zipCode,
            city
        }
        
        dispatch(addDataUser(dataUser))
        dispatch(completeStepRegister(true))
    }

    return (
        
        <View style = {{ alignItems: 'center', justifyContent: 'center', width: width }}>

            <View style = { styles.topContent }>

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
                     keyboardType = 'phone-pad'
                    />
                </View>
            </View>

            <View  style = { styles.bottomContent }>

                <View style = { styles.viewContent }>

                    <Text>Adresse :</Text>

                    <TextInput style = {[ styles.backgroundStyle, { width: width - 175 }]}
                     placeholder = "Votre adresse"
                     value = { adress }
                     onChangeText = { onChangeAdress }
                    />
                </View>

                <View style = {styles.viewContent }>

                    <Text>Ville :</Text>
                    
                    <TextInput style = { styles.backgroundStyle }
                     placeholder = "Votre ville"
                     value = { city }
                     onChangeText = { onChangeCity }
                    />
                </View>

                <View style = {[ styles.viewContent, { marginBottom: 32 } ]}>

                    <Text>Code Postal :</Text>
                    
                    <TextInput style = { styles.backgroundStyle }
                     placeholder = "01234"
                     value = { zipCode }
                     onChangeText = { onChangeZipCode }
                     keyboardType = 'phone-pad'
                    />
                </View>
            </View>

            <Button
                onPress={ () => { completeEndStepRegister(
                    lastName,
                    firstName,
                    phoneNumber,
                    adress,
                    zipCode,
                    city
                )}}
                title= 'Terminer'
                color= "#841584"
            />
        </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#f0eeee',
        padding: 10,
        height: 40,
        width: 125,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray',
        marginTop: 8
    },
    viewContent: {
        marginVertical: 8
    },
    topContent: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-between',
        paddingHorizontal: 50,
        width: width - 75
    },
    bottomContent: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-between',
        paddingHorizontal: 50,
        width: width - 75
    }
});

export default _DataRegister;