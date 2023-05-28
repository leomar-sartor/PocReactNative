import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: 'tomato'}}>
      <View
        style={{
          flex: 2,
          backgroundColor: 'skyblue',
        }}
      />

      <View
        style={{
          flex: 10,
          backgroundColor: 'powderblue',
        }}
      />

      <View
        style={{
          flex: 2,
          backgroundColor: 'steelblue',
        }}
      />
    </View>
  );
}
