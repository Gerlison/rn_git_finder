import {createStore, combineReducers, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

import GlobalDucks from './ducks';
import FindDucks from '~/modules/Find/ducks';

const middlewares = applyMiddleware(thunk);
const reducers = combineReducers(Object.assign({},
  GlobalDucks,
  FindDucks
));

const persistedReducer = persistReducer(persistConfig, reducers)

export default () => {
  let store = createStore(persistedReducer, middlewares);
  let persistor = persistStore(store);
  return { store, persistor };
}

