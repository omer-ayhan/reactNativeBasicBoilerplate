import React, {useContext, useEffect, useState} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  HeaderLarge,
  HeaderMedium,
} from '../../components/Headers/Headers.component';
import {GlobalContext} from '../../../infrastructure/context/GlobalProvider';
import Button from '../../components/Button/Button.component';
import {routes} from '../../../config/routes';
import {color} from '../../../theme/color';
import {CHANGE_GLOBAL_COLOR} from '../../../infrastructure/context/types';

export default function GlobalStateDemoScreen() {
  const {HOME} = routes;
  const {state, dispatch} = useContext(GlobalContext);
  const navigation = useNavigation();

  const navigateToHome = () => navigation.navigate(HOME);

  const changeColorDarkYellow = () =>
    dispatch({
      type: CHANGE_GLOBAL_COLOR,
      payload: color.darkYellow,
    });

  const changeColorBlack = () =>
    dispatch({
      type: CHANGE_GLOBAL_COLOR,
      payload: '#000',
    });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <HeaderLarge color={state.globalColor} margin="0 20px">
        Global State Demo
      </HeaderLarge>
      <HeaderMedium color={state.globalColor} margin="0 20px">
        {state.globalColor}
      </HeaderMedium>
      <Button
        onPress={changeColorDarkYellow}
        title="Change Color To Dark Yellow"
        bgColor={color.darkYellow}
        activeColor={color.lightYellow}
        textColor="#fff"
        textSize={20}
      />
      <Button
        onPress={changeColorBlack}
        title="Change Color To Black"
        bgColor="#000"
        activeColor={color.darkBrown}
        textColor="#fff"
        textSize={20}
      />
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
