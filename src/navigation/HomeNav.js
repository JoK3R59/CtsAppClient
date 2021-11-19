import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../component/HomeScreen';
import ContactScreen from '../component/ContactScreen';

const Stack = createStackNavigator();

function HomeNavigator() {
    return (
        <Stack.Navigator>

            <Stack.Screen options = {{ headerShown: false }}
             name = 'Accueil' component = { HomeScreen } />
            
            <Stack.Screen name = 'Contact' component = { ContactScreen } />
        </Stack.Navigator>
    )
};
export default HomeNavigator;