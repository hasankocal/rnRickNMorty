import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from './component/Header';
import ShowCharacters from './ShowCharacters';
import axios from 'axios';

const EpisodeDetail = ({route, navigation}) => {
  const id = route.params.id;
  console.log(id);
  const [detail, setDetail] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const getDetails = async () => {
    const details = await axios.get(
      `https://rickandmortyapi.com/api/episode/${id}`,
    );
    setDetail(details.data);
    setisLoading(false);
  };

  useEffect(() => {
    getDetails();
  }, []);
  //console.log(isLoading, detail);

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.episodeTitle}> {detail.name} </Text>
      <Text style={styles.episodeTitle}> Air Date: {detail.air_date} </Text>
      <Text style={styles.episodeTitle}> Episode: {detail.episode} </Text>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <ShowCharacters data={detail} />
      </View>
    </View>
  );
};

export default EpisodeDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151821',
    border: '0',
    width: '100%',
    height: '100%',
  },
  episodeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#bebfc1',
    alignSelf: 'center',
    marginTop: 12,
  },
});
