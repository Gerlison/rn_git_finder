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
import LoadingNextPage from '../../components/LoadingNextPage';
import ResultNotFound from '../../components/ResultNotFound';
import EmptyLasSearches from '../../components/EmptyLasSearches';


function SearchScreen(props: screen_properties) {
  const { search: {results, lastSearches, config} } = props;

  function navigateToProfile(item) {
    props.setLastSearch(item);
    Navigation.push(props.componentId, {
      component: {
        name: 'navigation.User.ProfileScreen'
      }
    });
  }

  function renderLoading() {
    if (results.isLoading)
      return <Loading />;
  }

  function renderList() {
    let listItems = lastSearches;
    let labelText = "";

    if (lastSearches.length)
      labelText = "recent searches";

    if (results.resultCount !== null) {
      listItems = results.items;
      if (results.resultCount)
        labelText = `${results.resultCount} results found`;
      else 
        labelText = "";
    }

    return (
      <>
        <Label>{labelText}</Label>
        <FlatList
          data={listItems}
          onEndReached={props.searchNextPage}
          ListEmptyComponent={renderListEmpty}
          renderItem={({item, index}) => (
            <>
              <ResultItem 
                result={item} 
                onPress={() => navigateToProfile(item)} 
              />
            </>
          )}
          ListFooterComponent={renderLoadingNextPage}/>
      </>
    )
  }

  function renderLoadingNextPage() {
    if (config.hasNextPage)
      return <LoadingNextPage />;

    return <></>;
  }

  function renderListEmpty() {
    if (results.resultCount === 0)
      return <ResultNotFound />

    return <EmptyLasSearches />
  }

  return (
    <Container style={{flexGrow: 1}}>
      <Header>
        <Logo />
        <SearchBar {...props} />
      </Header>
      <Content>
        {results.isLoading
          ? renderLoading() 
          : renderList()
        }
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
