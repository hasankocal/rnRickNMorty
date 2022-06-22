import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require('./../../assets/header.png')}
        style={styles.logo}
        resizeMode="stretch"
      />
      <Text style={styles.fonts}>Rick and Morty</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 85,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fonts: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#bebfc1',
  },
});
