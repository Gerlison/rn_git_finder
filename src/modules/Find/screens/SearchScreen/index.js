/**
  @flow
*/

import React from 'react';
import { Text } from 'react-native'
import {
  Container,
} from './styles';

import Icon from 'react-native-feather1s';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux'

type screen_properties = { 
  componentId: string,
  auth: Object
}

function SearchScreen(props: screen_properties) {
  return (
    <Container>
      <Text>
        {props.auth.vands}
      </Text>
    </Container>
  );
}

const mapStateToProps = state => {
  const {auth} = state;
  return Object.assign({}, {auth})
};

export default connect(mapStateToProps)(SearchScreen);
