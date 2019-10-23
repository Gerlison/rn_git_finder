/**
  @flow
*/

import React from 'react';
import { Text } from 'react-native'
import { Container } from '~shared/styles/theme';
import { Header, Logo } from './styles'

import Icon from 'react-native-feather1s';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux'

import SearchBar from '../../components/SearchBar'

type screen_properties = { 
  componentId: string,
}

function SearchScreen(props: screen_properties) {
  return (
    <Container>
      <Header>
        <Logo />
        <SearchBar />
      </Header>
    </Container>
  );
}

const mapStateToProps = state => {
  const {} = state;
  return Object.assign({}, {})
};

export default connect(mapStateToProps)(SearchScreen);
