import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../component/HomeScreen';
import ContactScreen from '../component/ContactScreen';
import RegistrationScreen from '../component/RegistrationScreen';
import LoginScreen from '../component/LoginScreen';

const Stack = createStackNavigator();

console.log(Stack.Screen.route)

function HomeNavigator() {
    return (
        <Stack.Navigator>

            <Stack.Screen options = {{ headerShown: false }}
             name = 'Accueil' component = { HomeScreen } 
            />
            
            <Stack.Screen name = 'Contact' component = { ContactScreen } />

            <Stack.Screen name = 'Inscription' component = { RegistrationScreen } />

            <Stack.Screen name = 'Connexion' component = { LoginScreen } />
        </Stack.Navigator>
    )
};
export default HomeNavigator;