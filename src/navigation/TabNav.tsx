import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Page1Screen from '../screens/Page1Screen';
import Page2Screen from '../screens/Page2Screen';

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Page 1" component={Page1Screen} />
      <Tab.Screen name="Page 2" component={Page2Screen} />
    </Tab.Navigator>
  );
}
