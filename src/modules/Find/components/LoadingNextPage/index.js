/**
  @flow
*/

import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Container, Photo, Info, Name, UserName, Loading } from './styles';

function LoadingNextPage(props: screen_properties) {
  return (
    <View>
      {new Array(5).fill({}).map((item, index) => (
        <Container key={index} style={{opacity: 1 - index*0.3}}>
          <Photo />
          <Info>
            <Name>Lorem Ipsum</Name>
            <UserName>Lorem Ipsum</UserName>
          </Info>
        </Container>
      ))}
      <Loading />
    </View>
  );
}

type screen_properties = {
  
}

export default LoadingNextPage;
