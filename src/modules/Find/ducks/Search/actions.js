// @flow
import Types from './types';
import * as Api from '../../api';

function setSearchResults(results: Object) {
  return {
    type: Types.SET_RESULTS,
    payload: results
  };
}

function setSearchFailed(payload: Object) {
  return {
    type: Types.SET_SEARCH_FAIL,
    payload
  };
}

function setSearchNextPageFailed() {
  return {
    type: Types.SET_SEARCH_NEXT_PAGE_FAIL
  };
}

function setSearchLoading() {
  return {
    type: Types.SET_SEARCH_LOADING
  };
}

function setSearchNextPageLoading() {
  return {
    type: Types.SET_SEARCH_NEXT_PAGE_LOADING
  };
}

export function clearSearch() {
  return {
    type: Types.CLEAR_SEARCH
  };
}

export function searchByText(text: string) {
  return (dispatch: Function, getState: Function) => {
    dispatch(clearSearch());
    dispatch(setSearchLoading());

    Api.search.get(`/users?q=${text}&per_page=100`)
    .then((response) => {
      dispatch(setSearchResults({
        ...response.data,
        hasNext: response.headers.link && response.headers.link.includes('next'),
        searchText: text
      }))
    }).catch(error => {
      console.log(error)
      dispatch(setSearchFailed({searchText: text}));
    })
  };
}

export function searchNextPage() {
  return (dispatch: Function, getState: Function) => {
    const { search: {config} } = getState();
    
    if (!config.hasNextPage)
      return;

    dispatch(setSearchNextPageLoading());
    Api.search.get(`/users?q=${config.searchText}&page=${config.page}&per_page=100`)
    .then((response) => {
      dispatch(setSearchResults({
        ...response.data,
        hasNext: response.headers.link && response.headers.link.includes('next'),
        searchText: config.searchText
      }))
    }).catch(error => {
      console.log(error)
      dispatch(setSearchNextPageFailed());
    })
  };
}
