import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PageUmScreen from './Componentes/StackNavigator/PageUm';
import PageDoisScreen from './Componentes/StackNavigator/PageDois';
import PageTresScreen from './Componentes/StackNavigator/PageTres';
import DadosProvider from './contexts/dados';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <DadosProvider>
        <Stack.Navigator
          screenOptions={{
            //gestureEnabled: true,
            // gestureDirection: 'horizontal',
            // fullScreenGestureEnabled: true,
            // customAnimationOnGesture: true,
            // animation: 'slide_from_bottom',
            headerShown: false,
          }}>
          <Stack.Screen
            name="PageUm"
            component={PageUmScreen}
            options={{title: 'Página Um'}}
          />
          <Stack.Screen
            name="PageDois"
            component={PageDoisScreen}
            options={{title: 'Página Dois'}}
          />
          <Stack.Screen
            name="PageTres"
            component={PageTresScreen}
            options={{title: 'Página Três'}}
          />
        </Stack.Navigator>
      </DadosProvider>
    </NavigationContainer>
  );
}
