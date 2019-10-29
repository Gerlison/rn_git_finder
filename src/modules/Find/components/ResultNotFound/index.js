import React from 'react';
import { Image } from './styles';
import { Container, Text } from '~shared/styles/theme';

export default function EmptyLasSearches() {
  return (
    <Container alignItems="center">
      <Image />
      <Text size="LARGER">No results found</Text>
    </Container>
  );
}
