import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Avatar = () => {
  return (
    <View style={styles.avatarStyle}>
      <Image
        source={{
          uri: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        }}
        resizeMode="contain"
        style={styles.avatar}></Image>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  avatarStyle: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
