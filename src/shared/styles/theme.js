import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: ${props => props.row ? 'row' : 'column'};
  align-items: ${props => props.alignItems || 'flex-start' };
  justify-content: ${props => props.justifyContent || 'flex-start' };
`;
