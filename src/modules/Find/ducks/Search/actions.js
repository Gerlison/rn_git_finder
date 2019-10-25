// @flow
import { batch } from 'react-redux';
import Types from './types';
import * as Api from '../../api';
import axios from 'axios'

function setSearchResults(results: Array<Object>) {
  return {
    type: Types.SET_RESULTS,
    payload: results
  };
}

export function setLastSearch(result: Array<Object>) {
  return {
    type: Types.SET_LAST,
    payload: result
  };
}

export function clearSearch() {
  return {
    type: Types.CLEAR_SEARCH
  };
}

function setSearchFailed() {
  return {
    type: Types.SEARCH_FAIL
  };
}

function setSearchLoading() {
  return {
    type: Types.SEARCH_LOADING
  };
}

export function searchByText(text: string, page: string = '1') {
  return (dispatch: Function, getState: Function) => {
    const { search: {results} } = getState();
    dispatch(setSearchLoading());
    Api.search.get(`/users?q=${text}&page=${page}`).then((response) => {
      // nextPage: response.headers.link.includes('rel="next"') ? results.nextPage++ : false,
      dispatch(setSearchResults(response.data))
    }).catch(error => {
      console.log(error)
      dispatch(setSearchFailed());
    })
  };
}
