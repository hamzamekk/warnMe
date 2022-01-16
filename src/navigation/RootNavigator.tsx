import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {createStackNavigator} from '@react-navigation/stack';

import {useAuth} from 'core';
import {NavigationContainer} from './NavigationContainer';
import {AuthNavigator} from './AuthNavigator';
import {DrawerNavigator} from './DrawerNavigator';

const Stack = createStackNavigator();

export const Root = () => {
  const {status} = useAuth();
  useEffect(() => {
    if (status !== 'idle') {
      RNBootSplash.hide({fade: true});
    }
  }, [status]);
  return (
    <Stack.Navigator
      screenOptions={{
        cardOverlayEnabled: false,
        headerShown: false,
        gestureEnabled: false,
        animationTypeForReplace: status === 'signIn' ? 'push' : 'pop',
      }}>
      {status === 'signIn' ? (
        <Stack.Screen name="App" component={DrawerNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};

export const RootNavigator = () => (
  <NavigationContainer>
    <Root />
  </NavigationContainer>
);
