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
import * as LastSearchActions from '../../ducks/LastSearches/actions';

import Buttons from '~shared/components/Buttons';
import SearchBar from '../../components/SearchBar';
import ResultItem from '../../components/ResultItem';
import Loading from '../../components/Loading';
import LoadingNextPage from '../../components/LoadingNextPage';
import ResultNotFound from '../../components/ResultNotFound';
import EmptyLastSearches from '../../components/EmptyLastSearches';
import ConnectionError from '~shared/components/ConnectionError';


function SearchScreen(props: screen_properties) {
  const { search: {results, config}, lastSearches } = props;

  function navigateToProfile(item) {
    props.setLastSearch(item);
    Navigation.push(props.componentId, {
      component: {
        name: 'navigation.User.ProfileScreen',
        passProps: {
          user: {
            id: item.id,  
            login: item.login
          }
        },
      }
    });
  }

  function renderView() {
     if (results.isLoading) 
      return <Loading />

    if (results.isFailed)
      return <ConnectionError onPress={props.searchNextPage} />;

    if (results.resultCount === null)
      return renderLastSearchesList()
    else 
      return renderResultsList()
  }

  function renderLastSearchesList() {
    let labelText = "";
    if (lastSearches.items.length)
      labelText = "recent searches";

    return (
      <>
        <Label>{labelText}</Label>
        <FlatList
          data={lastSearches.items}
          ListEmptyComponent={renderListEmpty}
          renderItem={({item, index}) => (
            <>
              <ResultItem 
                result={item} 
                onPress={() => navigateToProfile(item)} 
              />
            </>
          )}/>
      </>
    )
  }

  function renderResultsList() {
    let labelText = "";    
    if (results.resultCount)
      labelText = `${results.resultCount} results found`;

    return (
      <>
        <Label>{labelText}</Label>
        <FlatList
          data={results.items}
          onEndReached={props.searchNextPage}
          ListEmptyComponent={renderListEmpty}
          renderItem={({item, index}) => (
            <ResultItem 
              result={item} 
              onPress={() => navigateToProfile(item)} 
            />
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

    return <EmptyLastSearches />
  }

  return (
    <Container style={{flexGrow: 1}}>
      <Header>
        <Logo />
        <SearchBar {...props} />
      </Header>
      <Content isFailed={results.isFailed}>
        {renderView()}
      </Content>
    </Container>
  );
}

type screen_properties = { 
  componentId: string,
  search: Object,
  searchByText: Function,
  searchNextPage: Function,
  lastSearches: Object,
  setLastSearch: Function,
  clearSearch: Function
}

const mapStateToProps = state => {
  const {search, lastSearches} = state;
  return Object.assign({}, {search, lastSearches})
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(Object.assign({}, SearchActions, LastSearchActions), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
