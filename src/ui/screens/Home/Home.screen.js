import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {View} from 'react-native';

import {routes} from '../../../config/routes';
import {GlobalContext} from '../../../infrastructure/context/GlobalProvider';
import {color} from '../../../theme/color';
import Button from '../../components/Button/Button.component';
import {
  HeaderLarge,
  HeaderMedium,
} from '../../components/Headers/Headers.component';

export default function HomeScreen() {
  const {state} = useContext(GlobalContext);
  const {API, GLOBALSTATE, STYLEDCOMPONENT} = routes;
  const navigation = useNavigation();

  const navigateToDemo = routename => navigation.navigate(routename);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
      }}>
      <HeaderLarge color={state.globalColor}>
        Welcome to React Native Starter Boilerplate
      </HeaderLarge>
      <HeaderMedium color={state.globalColor} margin="20px 20px 0 20px">
        In this boilerpalte you will have navigation structure, api structure,
        react context api, styled-component, and some other configurations that
        you need to headstart a project
      </HeaderMedium>
      <Button
        onPress={() => navigateToDemo(API)}
        title="API Demo"
        bgColor={color.primary}
        activeColor={color.secondary}
        textColor="#fff"
        textSize={20}
        margin="10px 70px"
      />
      <Button
        onPress={() => navigateToDemo(GLOBALSTATE)}
        title="Global State Demo"
        bgColor={color.darkPurple}
        activeColor={color.lightPurple}
        textColor="#fff"
        textSize={20}
        margin="10px 70px"
      />
      <Button
        onPress={() => navigateToDemo(STYLEDCOMPONENT)}
        title="Styled Components Demo"
        bgColor={color.darkBrown}
        activeColor={color.lightBrown}
        textColor="#fff"
        textSize={20}
        margin="10px 70px"
      />
    </View>
  );
}
