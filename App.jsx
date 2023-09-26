import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from './Components/Home'; // Import the Home component

export default function App() {
  return (
    <View style={styles.container}>
      <Home /> {/* Render the Home component here */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001926',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
