// Aboutscreen.js
import React from 'react';
import {Button, Image, View, Text} from 'react-native';

export default function PageDoisScreen({navigation}) {
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      accessible
      accessibilityLabel="Página dois">
      <View accessible accessibilityLabel="Texto Dois">
        <Text>Texto Dois</Text>
      </View>
      <Image
        accessible
        accessibilityLabel="Celulares com app Funcional Card Instalado"
        source={require('../../Images/slide-1.png')}
        style={{
          width: 250,
          height: 250,
          alignSelf: 'center',
        }}
      />
      <Button
        title="Página I"
        onPress={() => navigation.navigate('PageUm')}
        accessibilityLabel="Apertar Botão para ir a página Um"
      />
      <Button
        title="Página III"
        onPress={() => navigation.push('PageTres')}
        accessibilityLabel="Apertar Botão para ir a página Três"
      />
    </View>
  );
}
