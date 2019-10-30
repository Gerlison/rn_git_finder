import styled from 'styled-components/native';

export const Image = styled.Image.attrs(props => ({
  resizeMode: 'contain',
  source: require('~images/noProfileViews.png')
}))`
  width: 50%;
  height: 240px;
`;
