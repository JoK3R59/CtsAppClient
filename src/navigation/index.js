import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import NewDelivery from '../component/NewDelivery';
import HomeNavigator from './HomeNav';
import Profil from '../component/Profil';

import _Title from '../_shared/_Title';

const Tabs = createBottomTabNavigator();

function AppNavigation() {
    
    return (
        <NavigationContainer>

            <Tabs.Navigator
            screenOptions= {
                ({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
            
                        if (route.name === 'Livraison') {
                        return <MaterialCommunityIcons name="steering" size = { size } color= { color } />
                        }
                        else if (route.name === 'Nouveau') {
                        return <AntDesign name="plussquare" size = { size } color= { color } />
                        }
                        else {
                        
                        return <FontAwesome name="user" size = { size } color= { color } />
                        }
                    }
                })
            }
            tabBarOptions = {{
                activeTintColor: 'black',
                inactiveTintColor: '#a9a9a9'
            }}>

                <Tabs.Screen name="Livraison" component={HomeNavigator}
                options={{ headerTitle: (props) => <_Title {...props} /> }}/>

                <Tabs.Screen name="Nouveau" component={NewDelivery}
                options={{ headerTitle: (props) => <_Title {...props} /> }}/>

                <Tabs.Screen name="Profil" component={Profil}
                options={{ headerTitle: (props) => <_Title {...props} /> }}/>
            </Tabs.Navigator>
        </NavigationContainer>
    )
};

export default AppNavigation;