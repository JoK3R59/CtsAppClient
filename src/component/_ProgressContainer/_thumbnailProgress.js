import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import _ProgressBar from '../../_shared/_ProgressBar';

const _thumbnailProgress = ({ data }) => {

    return (
        
        <View style = {{ flexDirection : "row" }}>

            <View style = {[ styles.content, { flexDirection : "column", flex: 2 }]}>

                <Text style = {{ fontWeight: 'bold' }}>
                    { data.date }
                </Text>

                <Text>{ data.timetableFirst } ~ { data.timetableSecond }</Text>

                <View style = {{ paddingTop:5 }}>

                    <_ProgressBar deliveryStatut={ data.deliveryStatut }/>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create ({
    content: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default _thumbnailProgress;