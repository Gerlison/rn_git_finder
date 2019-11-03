import styled from 'styled-components/native';
import colors from '~shared/styles/colors'
import { spacing } from '~shared/styles/metrics'
import { sizing } from '~shared/styles/fonts'
import { Text } from '~shared/styles/theme'

export const UserName = styled(Text)`
  font-size: ${sizing['SMALL']}px;
  color: ${colors['REGULAR']};
`;

export const Photo = styled.Image.attrs(props => ({
  source: {uri: props.sourceUrl},
  resizeMode: "cover"
}))`
  width: 64px;
  height: 64px;
  border-radius: 3px;
  background-color: ${colors['LIGHTER']};
  marginHorizontal: ${spacing['LARGER']}px;
`;

export const Stat = styled.View`
  flex-grow: 1;
  padding: ${spacing['LARGEST']}px;
  align-items: center;
  border-bottom-width: .2;
  border-top-width: .2;
  border-color: ${colors['LIGHT']};
  marginBottom: ${spacing['MEDIUM']}px;
`;