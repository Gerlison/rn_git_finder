import Types from './types';

const INITIAL_STATE = {
  user: {
    isLoading: true,
    isFailed: false, 
    data: null, 
  },
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_USER:
      return {
        ...state,
        user: {
          ...state.user,
          data: action.payload,
          isLoading: false,
          isFailed: false
        }
      };

    case Types.SET_USER_LOADING:
      return {
        ...state,
        user: {
          ...state.user,
          isLoading: true,
          isFailed: false
        }
      };

    case Types.SET_USER_FAILED:
      return {
        ...state,
        user: {
          ...state.user,
          isLoading: false,
          isFailed: true
        }
      };
    default:
      return state;
  }
}