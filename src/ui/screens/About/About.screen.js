import {View} from 'react-native';
import React from 'react';

import {HeaderMedium} from '../../components/Headers/Headers.component';
import Button from '../../components/Button/Button.component';
import {routes} from '../../../config/routes';
import {useNavigation} from '@react-navigation/native';
import {color} from '../../../theme/color';

export default function AboutScreen() {
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
      <HeaderMedium color="#000" margin="0 20px">
        In this boilerpalte you will have navigation structure, react context
        api, styled-component, and some other configurations that you need to
        headstart a project
      </HeaderMedium>
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
