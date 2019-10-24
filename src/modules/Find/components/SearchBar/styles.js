import styled from 'styled-components/native';
import { Container as BaseContainer } from '~shared/styles/theme'
import colors from '~shared/styles/colors'
import { spacing } from '~shared/styles/metrics'

export const Container = styled.View`
  width: 100%;
  border-radius: 3px;
  border-width: 0.2px;
  border-color: ${colors['DARKEST']};
  background-color: transparent;
  flex-direction: row;;
  align-items: center;
  padding-horizontal: ${spacing['MEDIUM']}px;
`;

export const Logo = styled.Image.attrs(props => ({
  source: require('~icons/git_finder.png'),
}))``;

export const TextInput = styled.TextInput.attrs(props => ({
  placeholder: "Torvalds...",
  returnKeyType: "search"
}))`
  flex: 1;
`;