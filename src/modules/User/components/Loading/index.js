/**
  @flow
 */

import React from 'react';
import { Photo, Text } from './styles';
import { Container, LargeLoading } from '~shared/styles/theme';
import { spacing } from '~shared/styles/metrics'
import colors from '~shared/styles/colors'

import Button from '~shared/components/Buttons';
import Icon from 'react-native-feather1s';

function Loading(props: properties) {
  return (
    <>
      <Container row alignItems="center" style={{margin: spacing['LARGER']}}>
        <Button.Transparent onPress={props.onPress}>
          <Icon color={colors['DARKEST']} name="arrow-left" size={24} />
        </Button.Transparent>
        <Photo />
        <Container style={{alignSelf:"stretch", flexGrow: 1}}>
          <Text></Text>
          <Text></Text>
        </Container>
      </Container>
      <Container style={{padding: spacing['LARGE']}} alignItems="center" justifyContent="center">
        <LargeLoading />
      </Container>
    </>
  );
}

type properties = {
  onPress: Function
}

export default Loading;