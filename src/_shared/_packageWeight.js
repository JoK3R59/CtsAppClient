import React from 'react';

import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const _packageWeight = ({ weight }) => {

    function selectIcon (weight) {

        let number = Number(weight)
        
        if(number <= 20) {
            return <Feather name="feather" size={24} color="black" />
    
        } else if(number > 20 & number < 50) {
            return <Octicons name="package" size={24} color="black" />
            
        } else {
            return <FontAwesome5 name="weight-hanging" size={24} color="black" />
        }
    };

    return (
        selectIcon(weight)
    )
};

export default _packageWeight;