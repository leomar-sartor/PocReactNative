import React from 'react';
import {Button, Image, View, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {connect} from 'react-redux';

function TabPageDoisScreen({count, increment, incrementAmount}) {
  const navigation = useNavigation();

  //no caso do desenho é o nosso EVENT HANDLER
  function handleOnClick() {
    increment();
  }

  function handleOnClickAmount() {
    incrementAmount(5);
  }

  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      accessible
      accessibilityLabel="Tabe Página dois">
      <View accessible accessibilityLabel="Tabe Texto Dois">
        <Text>Tab Pagina II</Text>
      </View>
      <Image
        accessible
        accessibilityLabel="Celulares com Página inicial do app Funcional Card"
        source={require('../../Images/slide-7.gif')}
        style={{
          width: 250,
          height: 450,
          alignSelf: 'center',
        }}
      />
      <Button
        title="Página I"
        onPress={() => {
          navigation.navigate('TabPageUm');
        }}
        accessibilityLabel="Apertar Botão para ir a página um"
      />
      <Button
        title="Página III"
        onPress={() => {
          navigation.navigate('TabPageTres');
        }}
        accessibilityLabel="Apertar Botão para ir a página Dois"
      />

      <Button
        title="Incrementar"
        onPress={handleOnClick}
        accessibilityLabel="Incrementar"
      />
      <Button
        title="Incrementar 5"
        onPress={handleOnClickAmount}
        accessibilityLabel="Incrementar 5"
      />
      <Text> Counter: {count}</Text>
    </View>
  );
}

//Forma antiga de implementar - quando era classe sem hooks
const mapStateToProps = state => {
  return {
    count: state.counter.value,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({type: 'counter/increment'}),
    incrementAmount: amount =>
      dispatch({type: 'counter/incrementAmount', payload: amount}),
  };
};

//HOC - Recebe um componente e retorna um novo!
export default connect(mapStateToProps, mapDispatchToProps)(TabPageDoisScreen);
