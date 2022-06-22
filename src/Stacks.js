import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import CharacterScreen from './Screens/CharacterScreen';
import CharacterDetail from './Screens/CharacterDetail';
import LocationScreen from './Screens/LocationScreen';
import LocationDetail from './Screens/CharacterDetail';
import EpisodeScreen from './Screens/EpisodeScreen';
import EpisodeDetail from './Screens/EpisodeDetail';

//Stacks
const LocationStack = createNativeStackNavigator();

const config = {};

export function Locations() {
  return (
    <LocationStack.Navigator>
      <LocationStack.Screen
        name="LocationScreen"
        component={LocationScreen}
        options={{headerShown: false}}
      />
      <LocationStack.Screen
        name="LocationDetail"
        component={LocationDetail}
        options={{headerShown: false}}
      />
    </LocationStack.Navigator>
  );
}

const EpisodeStack = createNativeStackNavigator();

export function Episodes() {
  return (
    <EpisodeStack.Navigator>
      <EpisodeStack.Screen
        name="Home"
        component={EpisodeScreen}
        options={{headerShown: false}}
      />
      <EpisodeStack.Screen
        name="EpisodeDetail"
        component={EpisodeDetail}
        options={{headerShown: false}}
      />
    </EpisodeStack.Navigator>
  );
}

const ChacterStack = createNativeStackNavigator();

export function Chacters() {
  return (
    <ChacterStack.Navigator>
      <ChacterStack.Screen
        name="Settings"
        component={CharacterScreen}
        options={{headerShown: false}}
      />
      <ChacterStack.Screen
        name="Details"
        component={CharacterDetail}
        options={{headerShown: false}}
      />
    </ChacterStack.Navigator>
  );
}
