import * as React from 'react';
import {SafeAreaView} from 'react-native';
import ListaHorizontal from './components/ListaHorizontal/Index';

export default function App() {
  const data = [
    '#FF6633',
    '#FFB399',
    '#FF33FF',
    '#FFFF99',
    '#3366E6',
    '#99FF99',
  ];

  return (
    <SafeAreaView>
      <ListaHorizontal data={data} />
    </SafeAreaView>
  );
}
