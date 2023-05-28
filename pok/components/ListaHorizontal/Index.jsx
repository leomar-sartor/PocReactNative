import React from 'react';
import {FlatList, View, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const ListaHorizontal = ({data}) => {
  return (
    <FlatList
      data={data}
      pagingEnabled
      //snapToAlignment="start"
      //snapToOffsets={} para parar em posições fixas
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => String(item)}
      horizontal
      renderItem={({item}) => (
        <View
          style={{
            backgroundColor: item,
            height: width / 2.6,
            width,
          }}
        />
      )}
    />
  );
};

export default ListaHorizontal;
