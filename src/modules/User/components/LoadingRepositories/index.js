import React from 'react';
import { Animated } from 'react-native';
import { RepositorieList, RepositorieItem, Text } from './styles';
import { Container } from '~shared/styles/theme';
import { spacing } from '~shared/styles/metrics'
import colors from '~shared/styles/colors'

import { oscillateOpacity } from '~shared/helpers/Animations';

export default function LoadingRepositories() {
  const [animatedOpacity, setAnimatedOpacity] = React.useState(new Animated.Value(0.4))

  React.useEffect(() => {
    oscillateOpacity(animatedOpacity)
  }, [])

  return (
    <>
      {
        new Array(10).fill({}).map((item, index) => (
          <RepositorieItem key={index} style={{opacity: animatedOpacity}}>
            <Container grow style={{flexBasis: '70%'}}>
              <Text style={{width: '50%'}} color='SECUNDARY'></Text>
              <Text size='LARGER' color='REGULAR'></Text>      
              <Text size='SMALLER' color='REGULAR' style={{marginTop: spacing['SMALLER']}}></Text>
            </Container>
          </RepositorieItem>
        ))
      }
    </>
  );
}
