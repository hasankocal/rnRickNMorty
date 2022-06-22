import { StyleSheet, View, ScrollView, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from './component/Header';
import Episode from './component/Episode';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';

const EpisodeScreen = ({ navigation }) => {
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const getEpisode = async () => {
    const episode = await axios.get(
      'https://rickandmortyapi.com/api/episode?page=1',
    );
    setEpisodes(episode.data.results);
    setisLoading(false);
  };
  useEffect(() => {
    getEpisode();
  }, []);
  // console.log(episodes, isLoading);
  if (isLoading) {
    return (
      <View>
        <Text>Loading..</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={{ backgroundColor: '#151821' }}>
      <View style={styles.container}>
        <Header />
        <ScrollView>
          {episodes.map((item, i) => (
            <Episode key={i} item={item} navigation={navigation} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default EpisodeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#151821',
    border: '0',
    width: '100%',
    height: '100%',
  },
});
