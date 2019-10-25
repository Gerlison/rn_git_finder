/**
  @flow
*/

import React from 'react';
import { Container, Label } from '~shared/styles/theme';
import { Header, Logo, Content, FlatList } from './styles'

import Icon from 'react-native-feather1s';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as SearchActions from '../../ducks/Search/actions';

import Buttons from '~shared/components/Buttons'
import SearchBar from '../../components/SearchBar'
import ResultItem from '../../components/ResultItem'

function SearchScreen(props: screen_properties) {
  function navigateToProfile() {
    Navigation.push(props.componentId, {
      component: {
        name: 'navigation.User.ProfileScreen'
      }
    });
  }

  function renderList() {
    const { search: {results, lasts, isLoading} } = props;

    if (isLoading) 
      return (
        <></>
      )

    return (
      <>
        <Label>
          {
            results.items 
            ? `${results.total_count} results found` 
            : "recent searches"
          }
        </Label>
        <FlatList
          data={results.items || lasts}
          // onEndReached={() => props.searchByText()}
          renderItem={({item}) => (
            <ResultItem result={item} onPress={navigateToProfile} />
          )}/>
      </>
    )
  }

  return (
    <Container>
      <Header>
        <Logo />
        <SearchBar isLoading={props.search.isLoading} getText={props.searchByText} />
      </Header>
      <Content>
        {renderList()}
      </Content>
    </Container>
  );
}

type screen_properties = { 
  componentId: string,
  search: Object,
  searchByText: Function
}

const mapStateToProps = state => {
  const {search} = state;
  return Object.assign({}, {search})
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(Object.assign({},SearchActions), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
