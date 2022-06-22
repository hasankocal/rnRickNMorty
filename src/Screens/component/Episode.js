import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Episode = ({item, navigation}) => {
  return (
    <View style={styles.episodes}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('EpisodeDetail', {
            id: item.id,
          })
        }>
        <ImageBackground
          source={{
            uri: 'https://i.pinimg.com/originals/a9/69/db/a969db2fa066e5066401bbfb6151f784.jpg',
          }}
          resizeMode="cover"
          style={styles.imageBg}
          imageStyle={{borderRadius: 10}}>
          <View style={styles.content}>
            <Text style={{color: '#bebfc1', padding: 10}}>{item.name}</Text>
            <View style={{flexDirection: 'column', alignItems: 'flex-end'}}>
              <Image
                source={require('./../../assets/righticon.png')}
                style={{
                  width: 48,
                  position: 'absolute',
                  right: 10,
                }}
              />
            </View>
          </View>
          <Text style={{color: '#bebfc1', padding: 10}}>{item.air_date}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default Episode;

const styles = StyleSheet.create({
  episodes: {
    padding: 20,
    paddingBottom: 2,
  },
  imageBg: {
    height: 100,
    opacity: 0.7,
  },
  content: {},
});
