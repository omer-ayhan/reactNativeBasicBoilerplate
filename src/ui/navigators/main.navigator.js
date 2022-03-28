import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import About from '../screens/About';
import {routes} from '../../config/routes';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  const {HOME, ABOUT} = routes;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={HOME}>
        <Stack.Screen
          name={HOME}
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ABOUT}
          component={About}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
