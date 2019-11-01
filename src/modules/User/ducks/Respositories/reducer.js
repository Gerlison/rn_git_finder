import Types from './types';

const INITIAL_STATE = {
  items: [],
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_LAST_SEARCH:
      return {
        ...state,
        items: [
          action.payload,
          ...state.items.filter(item => item.id != action.payload.id).slice(0, 9),
        ]
      };

    case Types.CLEAR_LAST_SEARCHES:
      return INITIAL_STATE;
  
    default:
      return state;
  }
}