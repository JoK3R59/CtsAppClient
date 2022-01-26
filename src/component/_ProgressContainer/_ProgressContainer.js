import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import _ProgressBar from '../../_shared/_ProgressBar';
import _thumbnailProgress from './_thumbnailProgress';
import _extandedProgress from './_extandedProgress';

const _ProgressContainer = ({ item }) => {

    const [ extend, setExtend ] = useState(false);

    const onPressBtn = () => extend ? setExtend(false) : setExtend(true);

    // console.log(item.user1);
    const data = item.user1;

    return (
        
        <View style = {[ styles.box, { flexDirection : "row" }]}>

            { extend ?
             null :
             <View style = {[ styles.content, { flex: 2 }]}>
                
                <Text>{ data.item } Produits</Text>
             </View>
            }

            <View style = {{ flexDirection : "column", flex: 3 }}>

                { extend ?
                 <_extandedProgress data = { data }/> :
                 <_thumbnailProgress data = { data }/> 
                }
            </View>

            <View style = {[ styles.content, { flex: 1 }]}>

                <TouchableOpacity
                //  style = {}
                 onPress = { onPressBtn }
                >

                    { extend ?
                     <AntDesign name="minuscircle" size={24} color="black" /> :
                     <AntDesign name="pluscircle" size={24} color="black" /> 
                    }
                </TouchableOpacity>
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

export default _ProgressContainer;