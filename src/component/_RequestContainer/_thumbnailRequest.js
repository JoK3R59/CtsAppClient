import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import _ProgressBar from '../../_shared/_ProgressBar';

const _thumbnailRequest = ({ data }) => {

    return (
        
        <View style = {{ flexDirection : "row" }}>

            <View style = {[ styles.content, { flexDirection : "column", flex: 2 }]}>

                <View>

                    <Text>Fait le :</Text>

                    <Text style = {{ alignSelf: 'center', fontWeight: 'bold' }}>
                        { data.madeDate }
                    </Text>
                </View>

                <View>

                    <Text>Prévu pour :</Text>

                    <Text style = {{ alignSelf: 'center', fontWeight: 'bold' }}>
                        { data.date }
                    </Text>
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

export default _thumbnailRequest;