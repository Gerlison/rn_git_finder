import styled from 'styled-components/native';

export const Image = styled.Image.attrs(props => ({
  resizeMode: 'contain',
  source: require('~images/noResultsFound.png')
}))`
  width: 50%;
  height: 240px;
`;
