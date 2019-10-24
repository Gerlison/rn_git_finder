/**
  @flow
*/

import React from 'react';
import { Container, Label } from '~shared/styles/theme';
import { Header, Logo, Content, FlatList } from './styles'

import Icon from 'react-native-feather1s';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux'

import Buttons from '~shared/components/Buttons'
import SearchBar from '../../components/SearchBar'
import ResultItem from '../../components/ResultItem'

function SearchScreen(props: screen_properties) {
  function search(text) {
    console.warn(text)
  }

  function navigateToProfile() {
    Navigation.push(props.componentId, {
      component: {
        name: 'navigation.User.ProfileScreen',
        options: {
          topBar: {
            title: {
              text: 'Pushed screen title'
            }
          }
        }
      }
    });
  }

  return (
    <Container>
      <Header>
        <Logo />
        <SearchBar getText={search} />
      </Header>
      <Content>
        <Label>recent searches</Label>
        <FlatList
          data={new Array(6).fill({})}
          renderItem={({item}) => (
            <ResultItem result={item} onPress={navigateToProfile} />
          )}/>
      </Content>
    </Container>
  );
}

type screen_properties = { 
  componentId: string,
}

const mapStateToProps = state => {
  const {} = state;
  return Object.assign({}, {})
};

export default connect(mapStateToProps)(SearchScreen);
