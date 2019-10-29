/**
  @flow
*/

import React from 'react';
import { TouchableWithoutFeedback, Animated } from 'react-native';
import { Container, Photo, Info, Name, UserName } from './styles';

function Loading(props: screen_properties) {
  const [animatedOpacity, setAnimatedOpacity] = React.useState(new Animated.Value(0.4))

  function startAnimation() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedOpacity, {
          toValue: 0.8,
          duration: 1000,
          useNativeDriver: true
        }),
        Animated.timing(animatedOpacity, {
          toValue: 0.4,
          duration: 1000,
          useNativeDriver: true
        }),
      ]),
      {iterations: 10}
    ).start(() => startAnimation())
  }

  React.useEffect(() => {
    startAnimation()
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
