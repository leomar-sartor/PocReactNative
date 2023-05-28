import React, {createContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

export const DadosContext = createContext({});

function DadosProvider({children}) {
  const navigation = useNavigation();
  const [dado, setDado] = useState('valor inicial');

  function showDado(value) {
    setDado(value);

    navigation.navigate('PageTres');
  }

  return (
    <DadosContext.Provider
      value={{
        info: 'Leomar Vaz Sartor',
        showDado,
        dado,
      }}>
      {children}
    </DadosContext.Provider>
  );
}

export default DadosProvider;
