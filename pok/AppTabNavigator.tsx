import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabPageUmScreen from './Componentes/TabNavigation/PageUm';
import TabPageDoisScreen from './Componentes/TabNavigation/PageDois';
import TabPageTresScreen from './Componentes/TabNavigation/PageTres';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="TabPageUm" backBehavior="order">
        <Tab.Screen
          name="TabPageUm"
          component={TabPageUmScreen}
          options={{
            tabBarAccessibilityLabel: 'Opção Um',
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="TabPageDois"
          component={TabPageDoisScreen}
          options={{
            tabBarAccessibilityLabel: 'Opção Dois',
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="TabPageTres"
          component={TabPageTresScreen}
          options={{
            tabBarAccessibilityLabel: 'Opção Três',
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
