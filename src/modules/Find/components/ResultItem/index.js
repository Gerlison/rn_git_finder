/**
  @flow
*/

import React, {useState} from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Container, Photo, Info, Name, UserName } from './styles'

function ResultItem(props: screen_properties) {
  const { result } = props;

  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <Container>
        <Photo sourceUrl={result.avatar_url} />
        <Info>
          <Name>{result.login}</Name>
          <UserName>{result.type}</UserName>
        </Info>
      </Container>
    </TouchableWithoutFeedback>
  );
}

type screen_properties = { 
  result: Object,
  onPress: Function
}

export default ResultItem;
