import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';

function statusProgress(number) {

    let status = {
        color: '',
        progress: 0,
        text: ''
    }
    
    switch(number) {
        case 0:
            status.color = 'brown'
            status.progress = 1
            status.text = 'Error'
            return console.log('Error Switch in ProgressBar, number = 0 ');
        case 1:
            status.color = 'yellow'
            status.progress = 0.25
            status.text = 'Enlèvement'
        return status;
        case 2:
            status.color = 'blue'
            status.progress = 0.5
            status.text = 'En cours de livraison'
        return status;
        case 3:
            status.color = 'green'
            status.progress = 1
            status.text = 'Livré'
        return status;
        case 4:
            status.color = 'red'
            status.progress = 0.5
            status.text = 'Incident'
        return status;
        default: 
            status.color = 'brown'
            status.progress = 1
            status.text = 'Error'
        return console.log('Error Switch in ProgressBar');
    }
};

const _ProgressBar = ({ deliveryStatut, params }) => {

    // console.log(params)

    let status = statusProgress(deliveryStatut);

    let width = (params) => {
        if (params != undefined) {
            return params.width
        } else {
            return 100
        }
    };

    let height = (params) => {
        if (params != undefined) {
            return params.height
        } else {
            return 10
        }
    };

    return (

        <View style = { styles.statusStyle }>

            <Progress.Bar
             progress={status.progress}
             width={width(params)}
             color={status.color}
             borderWidth={0.8}
             height={height(params)}
            />

            <Text>{ status.text }</Text>
        </View>
    )
};

const styles = StyleSheet.create ({
    statusStyle: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default _ProgressBar;