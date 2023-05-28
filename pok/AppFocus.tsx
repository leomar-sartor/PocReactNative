import React, {useRef, createRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  TextInput,
  AccessibilityInfo,
  findNodeHandle,
} from 'react-native';

export default function App() {
  //Primeira Tentativa
  // const myElement = useRef();
  // const onModalClose = () => {
  //   myElement.current.focus();
  // };

  //Segunda Tentativa
  const myElement = useRef();

  //const onModalClose = () -> {
  //async function onModalClose() {
  const onModalClose = async () => {
    //console.log('myElement', myElement); // Saída: myElement {curent:  null}
    //console.log('myElement.current', myElement.current); // Saída: myElement.curent:  null

    if (myElement && myElement.current) {
      console.log('Dentro do IF');
      const reactTag = findNodeHandle(myElement.current);
      console.log('reactTag', reactTag);
      if (reactTag) {
        //Promessa para avaliar se o Leitor (TalkBack ou VoiceOver está ativo)
        let retorno = await AccessibilityInfo.isScreenReaderEnabled();
        console.log('Retorno:', retorno);
        //.then(response => {
        //   console.log('Retorno:', response);
        // });

        console.log('If react tag', reactTag);

        // Lugar onde deve cair o leitor de texto - Voice Over / TalkBack
        AccessibilityInfo.setAccessibilityFocus(reactTag);
        // Se for campo de edição vai setar o foco (cursor) também, se não simplemente o ignora
        myElement.current.focus(); //Colocar o cursor
        console.log('Setou o foco', reactTag);
      }
    }
  };

  return (
    <View
      //accessible
      //accessibilityLabel="Teste"
      style={styles.container}
      //ref={myElement} // => irá lançar um erro () => TypeError: Cannot read properties of null (reading 'focus')
      //focusable={true} // =>  Usado para dispositivos de entradas com um teclado por exemplo
    >
      <Text
        accessible
        accessibilityLabel="TEnha força foco e café"
        selectable={true}
        //ref={myElement}
        style={styles.title}>
        Foco
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Primeiro Campo"
        autoFocus={true} // Vai colocar o foco aqui quando o componente terminar de ser montado
        ref={myElement}
      />

      <TextInput
        accessible
        accessibilityLabel="Campo de Texto para Testar"
        style={styles.input}
        placeholder="Segundo Campo"
        //ref={myElement}
        //Vai setar o foco aqui quando pressionar o botão de alerta
      />

      <TouchableOpacity
        style={styles.button}
        accessible
        accessibilityLabel="Apertar para Testar"
        //ref={myElement} //</View>=> irá lançar um erro () => TypeError: Cannot read properties of null (reading 'focus')
        //onFocus={() => console.log('Eu Botão recebi o Foco!')} => Não funcionou para Emulador no Android
        onPress={() => {
          console.log('clicou-me');
          Alert.alert(
            'Título',
            'Este é um aviso',
            [{text: 'Entendi', onPress: onModalClose}],
            {
              cancelable: true,
            },
          );
        }}>
        <Text style={[styles.buttonText]}>Aperte-me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItem: 'center',
    backgroundColor: '#D3D3D3',
    paddingHorizontal: 18,
  },
  title: {
    fontSize: 34,
    marginBottom: 34,
    color: '#121212',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    marginBottom: 8,
    borderRadius: 4,
    color: '#121212',
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#45D800',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
