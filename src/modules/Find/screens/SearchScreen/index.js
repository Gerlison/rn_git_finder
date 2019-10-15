/**
  @flow
*/

import React from 'react';
import {
  Container,
} from './styles';

import Icon from 'react-native-feather1s';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux'

type screen_properties = { componentId: string }

function SearchScreen(props: screen_properties) {
  return (
    <Container>

    </Container>
  );
}

const mapStateToProps = state => {
  const {} = state;
  return Object.assign({}, {})
};

export default connect(mapStateToProps)(SearchScreen);
