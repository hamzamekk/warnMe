import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Pressable, Text, View} from 'ui';

type Props = {
  type: string;
};

export const ListItem = ({type}: Props) => (
  <Pressable bg="white" mx="m" borderRadius={20}>
    <Image source={{uri: 'https://picsum.photos/200/300'}} style={style.img} />
    <View px={'s'} my="s" width={150}>
      <Text color="red" fontSize={14} variant="header">
        {type}
      </Text>
      <Text
        color="black"
        variant="subheader"
        fontSize={12}
        my="s"
        numberOfLines={2}>
        Accident in the north of that damn house Accident in the north of that
        damn house
      </Text>
    </View>
  </Pressable>
);

const style = StyleSheet.create({
  img: {
    height: 150,
    width: 150,
    borderRadius: 20,
  },
});
