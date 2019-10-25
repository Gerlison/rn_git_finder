/**
  @flow
*/

import React, {useState} from 'react';
import { Keyboard } from 'react-native'
import { Container, Logo, TextInput } from './styles'

import Buttons from '~shared/components/Buttons'

function SearchBar(props: screen_properties) {
  const [text, setText] = useState('');

  function submit() {
    if (!text.trim())
      return;

    Keyboard.dismiss()
    props.getText(text)
  }

  return (
    <Container>
      <Logo />
      <TextInput onChangeText={setText} onSubmitEditing={submit} />
      <Buttons.Transparent onPress={submit} isLoading={props.isLoading}>
        Go
      </Buttons.Transparent>
    </Container>
  );
}

type screen_properties = { 
  getText: Function,
  isLoading: boolean
}

export default SearchBar;
