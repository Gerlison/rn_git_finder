import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import GlobalDucks from './ducks';
import FindDucks from '~/modules/Find/ducks';

const middlewares = applyMiddleware(thunk);
const reducers = combineReducers(Object.assign({},
  GlobalDucks,
  FindDucks
));

export default createStore(reducers, middlewares);
