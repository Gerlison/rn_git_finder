// @flow
import Types from './types';
import * as Api from '../../api';

function setUserLoading() {
  return {
    type: Types.SET_USER_LOADING
  };
}

function setUserFailed() {
  return {
    type: Types.SET_USER_FAILED
  };
}

function setUser(payload: Object) {
  return {
    type: Types.SET_USER,
    payload
  };
}

export function getUser(user: string) {
  return (dispatch: Function, getState: Function) => {
    dispatch(setUserLoading());
    Api.search.get(`/users/${user}`)
    .then((response) => {
      dispatch(setUser(response.data))
    }).catch(error => {
      console.log(error)
      dispatch(setUserFailed());
    })
  };
}