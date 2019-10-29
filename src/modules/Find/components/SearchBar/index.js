/**
  @flow
*/

import React, {useState} from 'react';
import { Keyboard } from 'react-native'
import { Container, Logo, TextInput } from './styles'
import Icon from 'react-native-feather1s';

import Buttons from '~shared/components/Buttons'

function SearchBar(props: screen_properties) {
  const [text, setText] = useState('');
  const { search: {results} } = props;

  function submit() {
    if (!text.trim())
      return;

    Keyboard.dismiss()
    props.searchByText(text.trim())
  }

  function handleCancel() {
    setText('');
    props.clearSearch()
  }

  const renderButton = React.useMemo(() => {
    if (results.resultCount) {
      return(
        <Buttons.Transparent onPress={handleCancel}>
          <Icon name="x" size={24} />
        </Buttons.Transparent>
      )
    }

    return (
      <Buttons.Transparent 
        onPress={submit} 
        isLoading={results.isLoading}>
        Go
      </Buttons.Transparent>
    )
  }, [results])

  return (
    <Container>
      <Logo />
      <TextInput 
        onChangeText={setText} 
        onSubmitEditing={submit} 
        value={text}/>
      {renderButton}
    </Container>
  );
}

type screen_properties = {
  search: Object,
  searchByText: Function,
  clearSearch: Function
}

export default SearchBar;
