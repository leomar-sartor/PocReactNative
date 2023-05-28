import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box bgColor={'red.100'}>Hello world</Box>

      <Box bgColor={'blue.100'}>Baralho</Box>
    </NativeBaseProvider>
  );
}
