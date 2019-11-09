import styled from 'styled-components/native';
import { Animated } from 'react-native';
import colors from '~shared/styles/colors'
import { spacing } from '~shared/styles/metrics'
import { sizing } from '~shared/styles/fonts'
import { Text as BaseText } from '~shared/styles/theme'

export const RepositorieItem = styled(Animated.View)`
  padding: ${spacing['LARGER']}px;
  padding-left: 0;
  border-bottom-width: .2;
  border-color: ${colors['REGULAR']};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const RepositorieList = styled.FlatList.attrs(props => ({
  keyExtractor: (item, index) => index.toString()
}))`
  align-self: stretch;
  padding-left: ${spacing['LARGER']}px;
`;

export const Text = styled(BaseText)`
  background-color: ${colors['LIGHTER']};
  width: 80%;
  border-radius: 3px;
  margin-bottom: ${spacing['SMALLEST']}px;
`;