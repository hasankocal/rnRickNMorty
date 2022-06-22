import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Avatar from './component/Avatar';

const ShowCharacters = ({data}) => {
  console.log(data);
  return (
    <>
      <Text style={styles.title}>Characters</Text>
      <View style={{}}></View>

      <View style={styles.kutu1}></View>
      <View style={styles.kutu2}></View>
      <View style={styles.kutu3}></View>
    </>
  );
};

export default ShowCharacters;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#bebfc1',
    marginTop: 12,
    padding: 12,
  },

  kutu1: {
    flex: 5,
    width: '30%',
    backgroundColor: 'black',
  },
  kutu2: {
    flex: 5,
    width: '30%',

    backgroundColor: 'red',
  },
  kutu3: {
    flex: 3,
    width: '30%',

    backgroundColor: 'green',
  },
});
