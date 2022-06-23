import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CharacterScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.coming}>Coming Soon.</Text>
    </View>
  );
};

export default CharacterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#151821',
  },
  coming: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#bebfc1',
  }
});
