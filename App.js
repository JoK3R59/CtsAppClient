import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import _Title from './src/_shared/_Title';
import _subLogin from './src/_shared/_subLogin';

import AppNavigation from './src/navigation';

// const Stack = createNativeStackNavigator();
// console.log('Objet Stack : ', Stack)
const { Navigator, Screen } = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const App = () => {

  return (
    <SafeAreaView style = {{ flex: 1 }}>

      <AppNavigation />
    </SafeAreaView>
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