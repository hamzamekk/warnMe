import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from 'screens';

export type AuthStackParamList = {
  Home: undefined;
};

const Stack = createStackNavigator();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
