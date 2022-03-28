import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';

import {routes} from '../../../config/routes';
import {color} from '../../../theme/color';
import Button from '../../components/Button/Button.component';
import {HeaderLarge} from '../../components/Headers/Headers.component';

export default function HomeScreen() {
  const {ABOUT} = routes;
  const navigation = useNavigation();

  const navigateToAbout = () => navigation.navigate(ABOUT);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <HeaderLarge color="#000">
        Welcome to React Native Starter Boilerplate
      </HeaderLarge>
      <Button
        onPress={navigateToAbout}
        title="Go to About Page"
        bgColor={color.primary}
        activeColor={color.secondary}
        textColor="#fff"
        textSize={20}
      />
    </View>
  );
}
