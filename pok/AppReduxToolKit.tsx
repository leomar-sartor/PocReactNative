import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabPageOneScreen from './Componentes/TabNavigatorWithReduxToolkit/PageOne';
import TabPageTwoScreen from './Componentes/TabNavigatorWithReduxToolkit/PageTwo';
import TabPageThreeScreen from './Componentes/TabNavigatorWithReduxToolkit/PageThree';
import {Provider} from 'react-redux';

//import {store} from './redux/OldRedux';
import {store} from './reduxtoolkit/store';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="TabPageUm" backBehavior="order">
          <Tab.Screen
            name="TabPageUm"
            component={TabPageOneScreen}
            options={{
              tabBarAccessibilityLabel: 'Opção Um',
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="TabPageDois"
            component={TabPageTwoScreen}
            options={{
              tabBarAccessibilityLabel: 'Opção Dois',
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="TabPageTres"
            component={TabPageThreeScreen}
            options={{
              tabBarAccessibilityLabel: 'Opção Três',
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
