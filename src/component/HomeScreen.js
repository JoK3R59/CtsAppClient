import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, Dimensions, ScrollView, View } from 'react-native';

import _subLogin from '../_shared/_subLogin';
import DeliveryProgress from './DeliveryProgress';
import DeliveryRequest from './DeliveryRequest';

// REDUX
import { useSelector } from 'react-redux';
import { claimUserConnected } from '../redux/selectors';

const { width, height} = Dimensions.get('window');
// const windowHeight = Dimensions.get('window').height;

const HomeScreen = ({ navigation }) => {

    useEffect(() => {

        statutConnected ? setLoginOn(true) : setLoginOn(false)
    })

    const statutConnected = useSelector(claimUserConnected)

    const [ loginOn, setLoginOn ] = useState(false)

    return (
        // Error logYellow sur ScrollView "VirtualizedLists", a cause du FlatList contenu dans les enfants.
        <ScrollView  style = { styles.container }>

            <_subLogin navigation = { navigation }/>

            { loginOn ? <DeliveryProgress windowWidth = { width }/> : null }
            
            <DeliveryRequest windowWidth = { width }/>

            <View style = {{ alignItems: 'center' }}>

                <Button
                    onPress={ () => {
                        navigation.navigate('Contact')
                    }}
                    title="Nous Contacter"
                    color="#841584"
                />
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
        height: 'auto'
    },
    // header: {
    //     backgroundColor: `#f0f8ff`,
    //     width: '100%',
    //     borderWidth: 0.5,
    //     padding: 10,
    //     fontSize: 24
    // }
});

export default HomeScreen;