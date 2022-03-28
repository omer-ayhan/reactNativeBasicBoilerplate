import {Text} from 'react-native';
import styled from 'styled-components';

import {spacing} from '../../../theme/spacing';

const HeaderLarge = styled(Text)`
  color: ${props => props.color};
  font-size: ${spacing.large};
  font-weight: ${props => props.fontWeight || 'bold'};
  text-align: center;
  margin: ${props => props.margin || '0'};
`;

const HeaderMedium = styled(Text)`
  color: ${props => props.color};
  font-size: ${spacing.medium};
  font-weight: ${props => props.fontWeight || 'bold'};
  text-align: center;
  margin: ${props => props.margin || '0'};
`;

const HeaderSmall = styled(Text)`
  color: ${props => props.color};
  font-size: ${spacing.small};
  font-weight: ${props => props.fontWeight || 'bold'};
  text-align: center;
  margin: ${props => props.margin || '0'};
`;

export {HeaderLarge, HeaderMedium, HeaderSmall};
