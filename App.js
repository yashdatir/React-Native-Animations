import React from 'react';
import { StyleSheet, View } from 'react-native';
import Ball from './ball';
export default function App() {
  return (
    <View style={styles.container}>
      <Ball />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
