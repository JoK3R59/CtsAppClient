import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import _ProgressBar from '../../_shared/_ProgressBar';

const _defaultRequest = ({ data }) => {

    return (
        
        <View style = { styles.content }>

            <Text style = {{ marginBottom: 20 }}>
                Commencer une nouvelle demande de livraison en cliquant sur l'icône en bas.
            </Text>

            <AntDesign name="plussquare" size = { 36 } color= { 'grey' } />
        </View>
    )
};

const styles = StyleSheet.create ({
    content: {
        marginVertical: 50,
        marginHorizontal: 30,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default _defaultRequest;