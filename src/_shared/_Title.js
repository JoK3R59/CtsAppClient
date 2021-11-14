import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const _Title = ( props ) => {

    return (

        <View style = { styles.container }>

            <Text style = { styles.font }>
                Click Truck Service
            </Text>
        </View>
    )
};

const styles = StyleSheet.create ({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // // flexDirection: 'row',
        // alignItems: 'center',
        // padding: 12,
        // marginLeft: -18,
        // // marginTop: -18,
        // // marginBottom: -38,
        // // backgroundColor: 'red'
        // borderWidth: 2
    },
    font: {
        fontSize: 22,
    }
});

export default _Title;