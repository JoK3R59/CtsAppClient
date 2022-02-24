import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';

import { Provider } from 'react-redux';
import { store } from './src/redux/store';

import AppNavigation from './src/navigation';

const App = () => {

  return (
    <Provider store={store}>

      <SafeAreaView style = {{ flex: 1 }}>

        <AppNavigation />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;