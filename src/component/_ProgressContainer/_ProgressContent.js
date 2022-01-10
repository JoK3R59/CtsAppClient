import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import _ProgressBar from '../../_shared/_ProgressBar';

const _ProgressContent = ({ item }) => {

    // console.log(item.user1);
    const user = item.user1;

    return (
        
        <View style = {[ styles.box, { flexDirection : "row" }]}>

            <View style = {[ styles.content, { flex: 1 }]}>

                <Text>{ user.item } Produits</Text>
            </View>

            <View style = {[ styles.content, { flexDirection : "column", flex: 2 }]}>

                <Text style = {{ fontWeight: 'bold' }}>
                    { user.date }
                </Text>

                <Text>{ user.timetableFirst } ~ { user.timetableSecond }</Text>

                <View style = {{ paddingTop:5 }}>

                    <_ProgressBar deliveryStatut={ user.deliveryStatut }/>
                </View>

            </View>

            <View style = {[ styles.content, { flex: 1 }]}>
                
                <AntDesign name="pluscircle" size={24} color="black" />
            </View>
        </View>
    )
};

const styles = StyleSheet.create ({
    // header: {
    //     backgroundColor: `#f0f8ff`,
    //     width: 200,
    //     borderWidth: 0.5,
    //     padding: 10,
    //     fontSize: 24
    // },
    box: {
        marginVertical: 12,
        paddingVertical: 10,
        borderWidth: 0.5,
    },
    content: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // paddingHorizontal: 12
    }
});

export default _ProgressContent;