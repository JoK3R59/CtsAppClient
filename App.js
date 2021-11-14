import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import _Title from './src/_shared/_Title';
import _subLogin from './src/_shared/_subLogin';

import HomeScreen from './src/component/HomeScreen';
import NewDelivery from './src/component/NewDelivery';
import Profil from './src/component/Profil';

// const Stack = createNativeStackNavigator();
// console.log('Objet Stack : ', Stack)
const { Navigator, Screen } = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const App = () => {

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

        <Tabs.Screen name="Livraison" component={HomeScreen}
        options={{ headerTitle: (props) => <_Title {...props} /> }}/>

        <Tabs.Screen name="Nouveau" component={NewDelivery}
        options={{ headerTitle: (props) => <_Title {...props} /> }}/>

        <Tabs.Screen name="Profil" component={Profil}
        options={{ headerTitle: (props) => <_Title {...props} /> }}/>
      </Tabs.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;