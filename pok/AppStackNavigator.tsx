import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PageUmScreen from './Componentes/StackNavigator/PageUm';
import PageDoisScreen from './Componentes/StackNavigator/PageDois';
import PageTresScreen from './Componentes/StackNavigator/PageTres';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // gestureEnabled: true,
          // gestureDirection: 'horizontal',
          // fullScreenGestureEnabled: true,
          headerShown: false,
        }}>
        <Stack.Screen
          name="PageUm"
          component={gestureHandlerRootHOC(PageUmScreen)}
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
    </NavigationContainer>
  );
}
