import {Text} from 'react-native';
import styled from 'styled-components';

import {sizes} from '../../../theme/sizes';

const HeaderLarge = styled(Text)`
  color: ${props => props.color};
  font-size: ${sizes.large}px;
  font-weight: ${props => props.fontWeight || 'bold'};
  text-align: center;
  margin: ${props => props.margin || '0'};
`;

const HeaderMedium = styled(Text)`
  color: ${props => props.color};
  font-size: ${sizes.medium}px;
  font-weight: ${props => props.fontWeight || 'bold'};
  text-align: center;
  margin: ${props => props.margin || '0'};
`;

const HeaderSmall = styled(Text)`
  color: ${props => props.color};
  font-size: ${sizes.small}px;
  font-weight: ${props => props.fontWeight || 'bold'};
  text-align: center;
  margin: ${props => props.margin || '0'};
`;

export {HeaderLarge, HeaderMedium, HeaderSmall};
