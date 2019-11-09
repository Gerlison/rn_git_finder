import styled from 'styled-components/native';
import { Text as BaseText } from '~shared/styles/theme';
import { spacing } from '~shared/styles/metrics'
import colors from '~shared/styles/colors'

export const Text = styled(BaseText)`
  background-color: ${colors['LIGHTER']};
  width: 100%;
  margin-bottom: ${spacing['SMALLEST']}px;
`;

export const Photo = styled.View`
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