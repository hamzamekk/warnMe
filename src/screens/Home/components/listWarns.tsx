import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {Text, View} from 'ui';
import {ListItem} from './listItem';

const DATA = [
  {
    id: 0,
    type: 'Accident',
    region: {
      latitude: 37.788101,
      longitude: -122.4321,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: 1,
    type: 'Robbery',
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: 2,
    type: 'Wild animals',
    region: {
      latitude: 37.78845,
      longitude: -122.434,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: 3,
    type: 'Gun shot',
    region: {
      latitude: 37.7885,
      longitude: -122.4354,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: 4,
    type: 'Natural disaster',
    region: {
      latitude: 37.7883,
      longitude: -122.433,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: 5,
    type: 'Fire',
    region: {
      latitude: 37.7882,
      longitude: -122.432,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: 6,
    type: 'Other',
    region: {
      latitude: 37.789,
      longitude: -122.41,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
];

type Data = {
  id: number;
  type: string;
  region: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
};

type Props = {
  setCoordinates: (data: Data[]) => void;
};

export const ListWarns = ({setCoordinates}: Props) => {
  const [data, setDATA] = useState<Data[]>(DATA);
  const renderItem = ({item}: {item: Data}) => <ListItem type={item.type} />;

  //   useState(() => {
  //     setCoordinates(DATA);
  //   }, []);

  useEffect(() => {
    setCoordinates(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
