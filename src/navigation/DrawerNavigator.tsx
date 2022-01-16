import * as React from 'react';
import {Style} from 'screens';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeStackNavigator} from './HomeStackNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeStackNavigator"
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="HomeStackNavigator" component={HomeStackNavigator} />
      <Drawer.Screen name="Style" component={Style} />
    </Drawer.Navigator>
  );
};
