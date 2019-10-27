import styled from 'styled-components/native';
import {Animated} from 'react-native'
import colors from '~shared/styles/colors'
import { spacing } from '~shared/styles/metrics'
import { sizing } from '~shared/styles/fonts'
import { Text } from '~shared/styles/theme'

export const Container = styled(Animated.View)`
  flex-direction: row;
  padding-bottom: ${spacing['LARGE']}px;
`;

export const Photo = styled.View`
  width: 45px;
  height: 45px;
  border-radius: 3px;
  background-color: ${colors['LIGHTER']};
`;

export const Info = styled.View`
  padding-horizontal: ${spacing['SMALL']}px;
  width: 200px;
`;

export const Name = styled(Text)`
  background-color: ${colors['LIGHTER']};
  font-size: ${sizing['SMALL']}px;
  margin-bottom: ${spacing['SMALLEST']}px;
  color: ${colors['LIGHTER']};
`;

export const UserName = styled(Text)`
  font-size: ${sizing['SMALLER']}px;
  color: ${colors['LIGHTER']};
  background-color: ${colors['LIGHTER']};
`;
