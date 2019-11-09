// @flow
import Types from './types';
import * as Api from '../../api';
import crashlytics from '@react-native-firebase/crashlytics';

function setRepositoriesLoading() {
  return {
    type: Types.SET_REPOSITORIES_LOADING
  };
}

function setRepositoriesFailed() {
  return {
    type: Types.SET_REPOSITORIES_FAILED
  };
}

function setRepositories(payload: Object) {
  return {
    type: Types.SET_REPOSITORIES,
    payload
  };
}

export function clearRepositories() {
  return {
    type: Types.CLEAR_REPOSITORIES
  };
}


export function getRepositories() {
  return (dispatch: Function, getState: Function) => {
    dispatch(setRepositoriesLoading());
    const { profile: {user}} = getState();

    Api.users.get(`${user.data.login}/repos`)
      .then((response) => {
        dispatch(setRepositories(response.data))
      }).catch(error => {
        console.log(error)
        dispatch(setRepositoriesFailed());
        crashlytics().recordError(error)
      })
  };
}