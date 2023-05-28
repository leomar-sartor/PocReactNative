import React from 'react';
import {Button, Image, View, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../reduxtoolkit/hook/hooks';

function TabPageTresScreen() {
  //Com Hooks
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  //no caso do desenho é o nosso EVENT HANDLER
  function handleOnClick() {
    //increment();
    dispatch({type: 'counter/increment'});
  }

  function handleOnClickAmount() {
    //incrementAmount(5);
    dispatch({type: 'counter/incrementAmount', payload: 5});
  }

  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      accessible
      accessibilityLabel="Tabe Página três">
      <View accessible accessibilityLabel="Tabe Texto Três">
        <Text>Tab Pagina III</Text>
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

//Forma Nova com Hooks - mas ainda antiga
export default TabPageTresScreen;
