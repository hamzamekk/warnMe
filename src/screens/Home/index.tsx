import React, {useState} from 'react';
import {Screen, showErrorMessage, Text, View, HEIGHT, WIDTH} from 'ui';
import {StyleSheet} from 'react-native';
import MapView, {MapViewProps, Marker} from 'react-native-maps';

import {ListWarns} from './components';

type Data = {
  id: number;
  region: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
};

export const Home = () => {
  const mapRef = React.useRef<MapView>(null);
  const [showFooter, setShowFooter] = useState<boolean>(false);
  const [coordinates, setCoordinates] = useState<Data[] | []>([]);

  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const setCoordinatesZoom = () => {
    const coords = coordinates;
    const identifiers = coords.map(element => {
      return {
        latitude: element.region.latitude,
        longitude: element.region.longitude,
      };
    });
    mapRef.current?.fitToCoordinates(identifiers, {
      edgePadding: {top: 10, right: 10, bottom: 10, left: 10},
      animated: true,
    });
  };

  return (
    <Screen>
      <MapView
        ref={mapRef}
        style={styles.map}
        region={region}
        onMapReady={setCoordinatesZoom}
        onRegionChangeComplete={newRegion =>
          setRegion({...region, ...newRegion})
        }>
        {coordinates.map((item: Data) => (
          <Marker
            key={item.id}
            coordinate={item.region}
            identifier={`id-${item.id}`}
          />
        ))}
      </MapView>
      <View position="absolute" bottom={10} height={HEIGHT * 0.3} width={WIDTH}>
        <ListWarns setCoordinates={data => setCoordinates(data)} />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
