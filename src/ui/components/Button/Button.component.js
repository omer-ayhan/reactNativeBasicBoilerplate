import React from 'react';
import {TouchableHighlight, Text} from 'react-native';
import styled from 'styled-components';

const ButtonWrapper = styled(TouchableHighlight)`
  background-color: ${props => props.backgroundColor};
  border-radius: ${props => props.borderRadius}px;
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled(Text)`
  color: ${props => props.color};
  font-size: ${props => props.fontSize}px;
  font-weight: ${props => props.fontWeight};
  text-align: center;
`;

export default function Button({
  onPress,
  bgColor,
  activeColor,
  textColor,
  textSize,
  title,
}) {
  return (
    <ButtonWrapper
      backgroundColor={bgColor}
      borderRadius={5}
      padding="10px"
      margin="30px 70px"
      underlayColor={activeColor}
      onPress={onPress}>
      <ButtonText color={textColor} fontSize={textSize} fontWeight="bold">
        {title}
      </ButtonText>
    </ButtonWrapper>
  );
}
