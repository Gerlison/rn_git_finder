/**
  @flow
*/

import React from 'react';
import { TouchableWithoutFeedback, Animated } from 'react-native';
import { Container, Photo, Info, Name, UserName } from './styles';
import { oscillateOpacity } from '~shared/helpers/Animations';

function Loading(props: screen_properties) {
  const [animatedOpacity, setAnimatedOpacity] = React.useState(new Animated.Value(0.4))

  React.useEffect(() => {
    oscillateOpacity(animatedOpacity)
  }, [])

  return (
    <>
      {new Array(10).fill({}).map((item, index) => (
        <Container key={index} style={{opacity: animatedOpacity}}>
          <Photo />
          <Info>
            <Name>Lorem Ipsum</Name>
            <UserName>Lorem Ipsum</UserName>
          </Info>
        </Container>
      ))}
    </>
  );
}

type screen_properties = {
  
}

export default Loading;
