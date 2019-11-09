/**
  @flow
 */

import React from 'react';
import { Animated } from 'react-native';
import { Photo, Text, Stat } from './styles';
import { Container } from '~shared/styles/theme';
import { spacing } from '~shared/styles/metrics'
import colors from '~shared/styles/colors'

import Button from '~shared/components/Buttons';
import Icon from 'react-native-feather1s';
import { oscillateOpacity } from '~shared/helpers/Animations';

function Loading(props: properties) {
  const [animatedOpacity, setAnimatedOpacity] = React.useState(new Animated.Value(0.4))

  React.useEffect(() => {
    oscillateOpacity(animatedOpacity)
  }, [])

  return (
    <Animated.View style={{opacity: animatedOpacity}}>
      <Container row alignItems="center" style={{margin: spacing['LARGER']}}>
        <Button.Transparent onPress={props.onPress}>
          <Icon color={colors['DARKEST']} name="arrow-left" size={24} />
        </Button.Transparent>
        <Photo />
        <Container stretch grow>
          <Text></Text>
          <Text></Text>
        </Container>
      </Container>
      <Container row style={{alignSelf: 'stretch'}}>
        <Stat>
          <Text></Text>
        </Stat>
        <Stat>
          <Text></Text>
        </Stat>
        <Stat>
          <Text></Text>
        </Stat>
      </Container>  
    </Animated.View>
  );
}

type properties = {
  onPress: Function,
}

export default Loading;