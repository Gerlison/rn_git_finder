/**
  @flow
*/

import React, {useState} from 'react';
import { Container, Logo, TextInput } from './styles'

import Icon from 'react-native-feather1s';

import Buttons from '~shared/components/Buttons'

function SearchBar(props: screen_properties) {
  const [text, setText] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function submit() {
    setIsLoading(true);
  }

  return (
    <Container>
      <Logo />
      <TextInput onSubmitEditing={submit} />
      <Buttons.Transparent onPress={submit} isLoading={isLoading}>
        Go
      </Buttons.Transparent>
    </Container>
  );
}

type screen_properties = { 
  
}

export default SearchBar;
