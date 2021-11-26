import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

import logoG from '../../../assets/googleG.png';

const { width } = Dimensions.get('window');

const _LoginBtn = ({ onPress }) => {

    return (
        <TouchableOpacity onPress = { onPress }>

            <View style = { styles.container }>

                <Text>Google connexion</Text>

                <Image style = { styles.logo }
                 source={ logoG }
                />
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: width - 250,
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.8,
        elevation: 5,
        backgroundColor: '#fff',
        borderRadius: 10
    },
    logo: {
        width: 40,
        height: 40
    }
});

export default _LoginBtn;