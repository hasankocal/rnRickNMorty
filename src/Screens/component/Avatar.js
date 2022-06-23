import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Avatar = ({id, navigation}) => {
  //console.log(navigation);
  return (
    <View style={styles.avatarStyle}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('CharacterDetail', {
            itemId: id,
          })
        }>
        <Image
          source={{
            uri: `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`,
          }}
          resizeMode="contain"
          style={styles.avatar}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  avatarStyle: {
    padding: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
