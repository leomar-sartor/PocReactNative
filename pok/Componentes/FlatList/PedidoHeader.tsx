import React from 'react';
import {Image, useWindowDimensions, View, Text, StyleSheet} from 'react-native';

const cover = require('./dados/assets/Header.jpg');

const dimensions = {
  with: 1100,
  height: 400,
};

const ratio = dimensions.height / dimensions.with;

export function PedidoHeader() {
  const window = useWindowDimensions();

  const width = window.width;
  const height = width * ratio;

  //   console.log(`Ratio: ${ratio}`);
  //   console.log(`Largura Janela: ${width}`);
  //   console.log(`Altura: ${height}`);

  return (
    <>
      <Image style={{width, height}} source={cover} />
      <View style={styles.container}>
        <Text style={styles.title}>Pedidos </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6F4E37',
    paddingVertical: 8,
    marginBottom: 0,
  },

  title: {
    alignSelf: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
