import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Chacters, Locations, Episodes} from './Stacks';

const Tab = createBottomTabNavigator();

const tabConfig = {
  tabBarStyle: {backgroundColor: '#151821', borderTopWidth: 0},
};
const screenConfig = {
  headerShown: false,
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Episodes" screenOptions={tabConfig}>
        <Tab.Screen
          name="Chacters"
          component={Chacters}
          options={screenConfig}
        />
        <Tab.Screen
          name="Locations"
          component={Locations}
          options={screenConfig}
        />
        <Tab.Screen
          name="Episodes"
          component={Episodes}
          options={screenConfig}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
