import React from 'react';
import { Image } from './styles';
import { Container, Text } from '~shared/styles/theme';

export default function EmptyLasSearches() {
  return (
    <Container alignItems="center">
      <Image />
      <Text size="LARGE">No results found</Text>
    </Container>
  );
}
