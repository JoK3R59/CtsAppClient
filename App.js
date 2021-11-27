import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';

import AppNavigation from './src/navigation';

const App = () => {

  return (
    <SafeAreaView style = {{ flex: 1 }}>

      <AppNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;