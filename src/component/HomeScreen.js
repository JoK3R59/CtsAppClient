import React from 'react';
import { StyleSheet, Button, Dimensions, ScrollView } from 'react-native';

import _subLogin from '../_shared/_subLogin';
import DeliveryProgress from './DeliveryProgress';
import DeliveryRequest from './DeliveryRequest';

const { width, height} = Dimensions.get('window');
// const windowHeight = Dimensions.get('window').height;

const HomeScreen = ({ navigation }) => {

    return (
        // Error logYellow sur ScrollView "VirtualizedLists", a cause du FlatList contenu dans les enfants.
        <ScrollView  style = { styles.container }>

            <_subLogin navigation = { navigation }/>

            <DeliveryProgress windowWidth = { width }/>

            {/* <Text style = { styles.header }>
                Demande de livraison :
            </Text> */}

            <DeliveryRequest windowWidth = { width }/>

            <Button
            onPress={ () => {
                navigation.navigate('Contact')
            }}
            title="Nous Contacter"
            color="#841584"
            />
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
    header: {
        backgroundColor: `#f0f8ff`,
        width: '100%',
        borderWidth: 0.5,
        padding: 10,
        fontSize: 24
    }
});

export default HomeScreen;