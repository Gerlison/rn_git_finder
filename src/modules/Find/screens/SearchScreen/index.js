/**
  @flow
*/

import React from 'react';
import { Container, Label } from '~shared/styles/theme';
import { Header, Logo, Content, FlatList } from './styles';

import Icon from 'react-native-feather1s';
import { Navigation } from 'react-native-navigation';
import { connect, batch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SearchActions from '../../ducks/Search/actions';

import Buttons from '~shared/components/Buttons';
import SearchBar from '../../components/SearchBar';
import ResultItem from '../../components/ResultItem';
import Loading from '../../components/Loading';


function SearchScreen(props: screen_properties) {

  function navigateToProfile(item) {
    props.setLastSearch(item);
    Navigation.push(props.componentId, {
      component: {
        name: 'navigation.User.ProfileScreen'
      }
    });
  }

  function renderList() {
    const { search: {results, lastSearches} } = props;
    let listItems = lastSearches;
    let labelText = "recent searches";

    if (results.resultCount) {
      listItems = results.items;
      labelText = `${results.resultCount} results found`;
    }

    if (results.isLoading)
      return <Loading />;
    
    return (
      <>
        <Label>{labelText}</Label>
        <FlatList
          data={listItems}
          onEndReached={props.searchNextPage}
          renderItem={({item, index}) => (
            <ResultItem 
              result={item} 
              onPress={() => navigateToProfile(item)} 
            />
          )}/>
      </>
    )
  }

  return (
    <Container style={{flexGrow: 1}}>
      <Header>
        <Logo />
        <SearchBar {...props} />
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
  searchByText: Function,
  searchNextPage: Function,
  setLastSearch: Function,
  clearSearch: Function
}

const mapStateToProps = state => {
  const {search} = state;
  return Object.assign({}, {search})
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(Object.assign({},SearchActions), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
