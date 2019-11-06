import Types from './types';

const INITIAL_STATE = {
  repositories: {
    isLoading: false,
    isFailed: false, 
    data: null, 
  },
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_REPOSITORIES:
      return {
        ...state,
        repositories: {
          ...state.repositories,
          data: action.payload,
        }
      };

    case Types.SET_REPOSITORIES_LOADING:
      return {
        ...state,
        repositories: {
          ...state.repositories,
          isLoading: true,
          isFailed: false
        }
      };

    case Types.SET_REPOSITORIES_FAILED:
      return {
        ...state,
        repositories: {
          ...state.repositories,
          isLoading: false,
          isFailed: true
        }
      };
    default:
      return state;
  }
}