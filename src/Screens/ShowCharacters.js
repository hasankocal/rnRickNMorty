import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Avatar from './component/Avatar';

const ShowCharacters = ({data, navigation}) => {
  const cha = data.characters;
  if (!cha) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  //console.log(data);

  return (
    <View>
      <Text style={styles.title}>Characters</Text>
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          {cha.map((c, i) => (
            <Avatar navigation={navigation} key={i} id={c.split('/')[5]} />
          ))}
        </View>
      </ScrollView>
    </View>
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
});
