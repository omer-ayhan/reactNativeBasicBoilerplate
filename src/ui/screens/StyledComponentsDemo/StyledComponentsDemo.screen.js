import {View} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';

import {HeaderLarge} from '../../components/Headers/Headers.component';
import Button from '../../components/Button/Button.component';
import {routes} from '../../../config/routes';
import {color} from '../../../theme/color';
import {GlobalContext} from '../../../infrastructure/context/GlobalProvider';

export default function StyledComponentsDemo() {
  const {state} = useContext(GlobalContext);
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
      <HeaderLarge color={state.globalColor} margin="0 20px">
        Styled Components Demo
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
