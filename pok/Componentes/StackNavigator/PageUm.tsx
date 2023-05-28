import React, {useContext} from 'react';
import {Button, Image, View, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {DadosContext} from '../../contexts/dados';

// export default function PageUmScreen({navigation}) {
export default function PageUmScreen() {
  const navigation = useNavigation();

  const {info, showDado, dado} = useContext(DadosContext);

  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      accessible
      accessibilityLabel="Página um">
      <View accessible accessibilityLabel="Texto um">
        <Text>Texto Um </Text>

        <Text>{info} </Text>
        <Text>{dado} </Text>
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
        onPress={() => navigation.navigate('PageDois')}
        accessibilityLabel="Apertar Botão para ir a página Dois"
      />
      <Button
        title="ACIONAR CONTEXTO"
        onPress={() => showDado('teste')}
        accessibilityLabel="Apertar Botão para ir a página Dois"
      />
    </View>
  );
}
