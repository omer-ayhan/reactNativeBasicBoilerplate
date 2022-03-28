import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import ApiDemo from '../screens/ApiDemo';
import GlobalStateDemo from '../screens/GlobalStateDemo';
import StyledComponentsDemo from '../screens/StyledComponentsDemo';
import {routes} from '../../config/routes';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  const {HOME, API, GLOBALSTATE, STYLEDCOMPONENT} = routes;
  return (
    <NavigationContainer>
      {/* Main Page */}
      <Stack.Navigator initialRouteName={HOME}>
        <Stack.Screen
          name={HOME}
          component={Home}
          options={{headerShown: false}}
        />
        {/* Demos */}
        <Stack.Screen
          name={API}
          component={ApiDemo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={GLOBALSTATE}
          component={GlobalStateDemo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={STYLEDCOMPONENT}
          component={StyledComponentsDemo}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
