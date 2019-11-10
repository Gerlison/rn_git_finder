import styled from 'styled-components/native';
import colors from '~shared/styles/colors'
import { spacing } from '~shared/styles/metrics'
import { sizing } from '~shared/styles/fonts'
import { Text } from '~shared/styles/theme'

export const Container = styled.View`
  flex-direction: row;
  padding-bottom: ${spacing['LARGE']}px;
`;

export const Photo = styled.Image.attrs(props => ({
  source: {uri: props.sourceUrl},
  resizeMode: "cover"
}))`
  width: 45px;
  height: 45px;
  border-radius: 3px;
  background-color: ${colors['LIGHTER']};
`;

export const Info = styled.View`
  padding-horizontal: ${spacing['SMALL']}px;
`;

export const Name = styled(Text)``;

export const UserName = styled(Text)`
  font-size: ${sizing['SMALL']}px;
  color: ${colors['REGULAR']};
`;
