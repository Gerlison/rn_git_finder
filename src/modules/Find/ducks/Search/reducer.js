import Types from './types';

const INITIAL_STATE = {
  results: {
    nextPage: 1
  },
  lasts: [],
  isLoading: false,
  isFailed: false
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_RESULTS:
      return {
        ...state,
        results: action.payload,
        isLoading: false,
        isFailed: false
      };

    case Types.SET_LAST:
      return {
        ...state,
        lasts: [
          action.payload,
          ...state.lasts.slice(0, 10),
        ]
      };

    case Types.CLEAR_SEARCH:
      return {
        ...state,
        results: null,
        isLoading: false,
        isFailed: false
      };

    case Types.SEARCH_FAIL:
      return {
        ...state,
        isLoading: false,
        isFailed: true
      };

    case Types.SEARCH_LOADING:
      return {
        ...state,
        isLoading: true,
        isFailed: false
      };
  
    default:
      return state;
  }
}