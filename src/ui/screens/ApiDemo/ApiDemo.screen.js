import {View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {HeaderLarge} from '../../components/Headers/Headers.component';
import Button from '../../components/Button/Button.component';
import {routes} from '../../../config/routes';
import {color} from '../../../theme/color';

export default function ApiDemo() {
  const {HOME} = routes;
  const navigation = useNavigation();

  const navigateToHome = () => navigation.navigate(HOME);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <HeaderLarge color="#000" margin="0 20px">
        API Demo
      </HeaderLarge>
      <Button
        onPress={navigateToHome}
        title="Back to Home Page"
        bgColor={color.primary}
        activeColor={color.secondary}
        textColor="#fff"
        textSize={20}
      />
    </View>
  );
}
