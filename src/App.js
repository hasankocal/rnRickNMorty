import * as React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Chacters, Locations, Episodes} from './Stacks';

const Tab = createBottomTabNavigator();

const tabConfig = {
  tabBarStyle: {backgroundColor: '#151821', borderTopWidth: 0},
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Episodes" screenOptions={tabConfig}>
        <Tab.Screen
          name="Chacters"
          component={Chacters}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./assets/profile.png')}
                style={{width: 30, height: 30}}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Locations"
          component={Locations}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./assets/locations.png')}
                style={{width: 30, height: 30}}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Episodes"
          component={Episodes}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./assets/movies.png')}
                style={{width: 30, height: 30}}
              />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
