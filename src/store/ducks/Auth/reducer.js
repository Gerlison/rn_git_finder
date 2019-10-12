/**
 * @flow
 */

import types from './types';

const INITIAL_STATE = {
  vands: 'vands é gay',
};

export default function reducer(
  state: mixed = INITIAL_STATE,
  action: { type: string, payload?: mixed },
) {
  switch (action.type) {
    case types.login:
      return {
        ...state,
      };

    case types.logout:
      return state;

    default:
      return state;
  }
}
