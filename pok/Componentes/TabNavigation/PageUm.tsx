import React from 'react';
import {Button, Image, View, Text} from 'react-native';

export default function TabPageUmScreen({navigation}) {
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      accessible
      accessibilityLabel="Tabe Página um">
      <View accessible accessibilityLabel="Tabe Texto Um">
        <Text>Tab Pagina I</Text>
      </View>
      <Image
        accessible
        accessibilityLabel="Celulares com Página inicial do app Funcional Card"
        source={require('../../Images/slide-7.gif')}
        style={{
          width: 250,
          height: 500,
          alignSelf: 'center',
        }}
      />
      <Button
        title="Página II"
        onPress={() => {
          navigation.navigate('TabPageDois');
        }}
        accessibilityLabel="Apertar Botão para ir a página Dois"
      />
    </View>
  );
}
