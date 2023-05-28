// Aboutscreen.js
import React from 'react';
import {Button, Image, View, Text} from 'react-native';

export default function PagetresScreen({navigation}) {
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      accessible
      accessibilityLabel="Página três">
      <View accessible accessibilityLabel="Texto Três">
        <Text>Texto Três</Text>
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
        title="Página II"
        onPress={() => navigation.navigate('PageDois')}
        accessibilityLabel="Apertar Botão para ir a página Dois"
      />
    </View>
  );
}
