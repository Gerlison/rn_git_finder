/**
  @flow
*/

import React, {useState} from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Container, Photo, Info, Name, UserName } from './styles'

function ResultItem(props: screen_properties) {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <Container>
        <Photo />
        <Info>
          <Name>Linus Torvalds</Name>
          <UserName>@torvalds</UserName>
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
