// @flow
import Types from './types';

export function clearLastSearch() {
  return {
    type: Types.CLEAR_LAST_SEARCHES
  };
}

export function setLastSearch(result: Object) {
  return {
    type: Types.SET_LAST_SEARCH,
    payload: result
  };
}