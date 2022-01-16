import React from 'react';
import {Button, Screen, showErrorMessage, Text, View} from 'ui';
import {API_URL} from '@env';
import {translate, useAuth} from 'core';
import {useTasks} from 'api';
import MapView from 'react-native-maps';

export const Home = () => {
  const {signOut} = useAuth();
  const {data, isLoading} = useTasks();
  return (
    <Screen>
      <MapView
        style={{flex: 1}}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </Screen>
  );
};
