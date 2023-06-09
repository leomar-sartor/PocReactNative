import React, {useState} from 'react';
import {View, Text, Image, I18nManager} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

// I18nManager.forceRTL(true);

const slides = [
  {
    key: '1',
    title: 'Fábrica de Aplicativos',
    text: 'Apreenda a desenvolver aplicativos do extremo zero, usando as tecnologias mais modernas do mercado.',
    image: require('./src/assets/1.png'),
  },
  {
    key: '2',
    title: '100% na PRÁTICA',
    text: 'Voc6e vai aprender a desenvolver aplicativos e sistemas completos usando React Native',
    image: require('./src/assets/2.png'),
  },
  {
    key: '3',
    title: 'CURSO FOCADO NO MERCADO',
    text: 'Totalmente na prática edireto ao ponto com as tecnologias atuais do mercado',
    image: require('./src/assets/3.png'),
  },
];

export default function App() {
  const [showHome, setShowHome] = useState(false);

  function renderSlides({item}) {
    return (
      <View style={{flex: 1}}>
        <Image
          source={item.image}
          style={{
            resizeMode: 'cover',
            height: '73%',
            width: '100%',
          }}
        />
        <Text
          style={{
            paddingTop: 25,
            paddingBottom: 10,
            fontSize: 23,
            fontWeight: 'bold',
            color: '#009CFF',
            textAlign: 'center',
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: '#b5b5b5',
            paddingHorizontal: 25,
            fontSize: 15,
          }}>
          {item.text}
        </Text>
      </View>
    );
  }

  if (showHome) {
    return <Text>ENTORU NA HOME</Text>;
  } else {
    return (
      <AppIntroSlider
        renderItem={renderSlides}
        data={slides}
        activeDotStyle={{
          backgroundColor: '#009CFF',
          width: 30,
        }}
        renderPrevButton={() => <Text>Voltar</Text>}
        renderNextButton={() => <Text>Avançar</Text>}
        renderDoneButton={() => <Text>Entrar</Text>}
        showPrevButton={true}
        showNextButton={true}
        onDone={() => alert('ENTROU')}
      />
    );
  }
}
