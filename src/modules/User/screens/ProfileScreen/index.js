/**
  @flow
*/

import React from 'react';
// import { } from './styles';
import { Container } from '~shared/styles/theme';

import Icon from 'react-native-feather1s';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';

function ProfileScreen(props: { componentId: string }) {
  return (
    <Container>
      
    </Container>
  );
}

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps)(ProfileScreen);
