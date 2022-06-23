import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './component/Header';
import Episode from './component/Episode';

const CharacterDetail = ({route, navigation}) => {
  const {itemId} = route.params;
  const [character, setCharacter] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const getCharacter = async () => {
    const cha = await axios.get(
      `https://rickandmortyapi.com/api/character/${itemId}`,
    );
    setCharacter(cha.data);
    setisLoading(false);
  };
  useEffect(() => {
    getCharacter();
  }, []);
  if (isLoading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.cha}>
          <Image
            source={{
              uri: `https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg`,
            }}
            resizeMode="contain"
            style={styles.image}></Image>
          <Text style={styles.title}>Name: {character.name}</Text>
          <Text style={styles.title}>
            Status: {(character.status = 'Dead' ? '⚰' : character.status)}
          </Text>
          <Text style={styles.title}>Species: {character.species}</Text>
          <Text style={styles.title}>Gender: {character.gender}</Text>
          <View style={{width: '100%'}}>
            {character.episode.map((item, i) => (
              <Episode key={i} item={item} navigation={navigation} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CharacterDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151821',
    border: '0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#bebfc1',
    marginTop: 12,
    padding: 12,
  },
  cha: {
    marginTop: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },
});
