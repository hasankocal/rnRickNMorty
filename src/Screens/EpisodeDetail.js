import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
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
  console.log(isLoading, detail);
  return (
    <View>
      <Text>{detail.air_date}</Text>
    </View>
  );
};

export default EpisodeDetail;

const styles = StyleSheet.create({});
