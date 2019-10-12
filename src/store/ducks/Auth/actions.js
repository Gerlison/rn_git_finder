/**
 * @flow
 */
import types from './types';

type action_type = { type: string, payload?: mixed };

export const userLogin = (payload: mixed): action_type => {
  return {
    type: types.login,
    payload,
  };
};

export const userLogout = (payload: mixed): action_type => {
  return {
    type: types.logout,
    payload,
  };
};
