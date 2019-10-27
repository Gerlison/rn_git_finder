import Types from './types';

const INITIAL_STATE = {
  results: {
    isLoading: false,
    isLoadingNextPage: false,
    isFailed: false,
    isFailedNextPage: false,
    items: [],
    resultCount: null,
  },
  lastSearches: [],
  config: {
    hasNextPage: false,
    searchText: '',
    page: 1
  }
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_RESULTS:
      return {
        ...state,
        results: {
          ...state.results,
          resultCount: action.payload.total_count,
          items: [
            ...state.results.items,
            ...action.payload.items,
          ],
          isLoading: false,
          isLoadingNextPage: false,
          isFailed: false,
          isFailedNextPage: false,
        },
        config: {
          ...state.config,
          hasNextPage: action.payload.hasNext,
          searchText: action.payload.searchText,
          page: state.config.page+1
        },
      };

    case Types.SET_LAST_SEARCH:
      return {
        ...state,
        lastSearches: [
          action.payload,
          ...state.lastSearches.slice(0, 9),
        ]
      };

    case Types.SET_SEARCH_FAIL:
      return {
        ...state,
        results: {
          ...state.results,
          isLoading: false,
          isFailed: true
        }
      };

    case Types.SET_SEARCH_NEXT_PAGE_FAIL:
      return {
        ...state,
        results: {
          ...state.results,
          isLoadingNextPage: false,
          isFailedNextPage: true
        }
      };

    case Types.SET_SEARCH_LOADING:
      return {
        ...state,
        results: {
          ...state.results,
          isLoading: true,
          isFailed: false
        }
      };
      
    case Types.SET_SEARCH_NEXT_PAGE_LOADING:
      return {
        ...state,
        results: {
          ...state.results,
          isLoadingNextPage: true,
          isFailedNextPage: false
        }
      };

    case Types.CLEAR_SEARCH:
      return {
        ...state,
        results: INITIAL_STATE.results,
        config: INITIAL_STATE.config
      };
  
    default:
      return state;
  }
}