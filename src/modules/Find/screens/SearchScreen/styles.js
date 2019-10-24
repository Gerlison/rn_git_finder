import styled from 'styled-components/native';
import { spacing } from '~shared/styles/metrics'

export const Header = styled.View`
  width: 100%;
  padding: ${spacing['MEDIUM']}px;
  align-items: center;
`;

export const Logo = styled.Image.attrs(props => ({
  source: require('~images/main_logo.png'),
  resizeMode: 'contain',
}))`
  margin-vertical: ${spacing['LARGE']}px;
  height: 50px;
`;

export const FlatList = styled.FlatList.attrs(props => ({
  keyExtractor: (item, index) => index.toString(),
}))``;

export const Content = styled.View`
  flex-grow: 1;
  width: 100%;
  padding: ${spacing['MEDIUM']}px;
`;
