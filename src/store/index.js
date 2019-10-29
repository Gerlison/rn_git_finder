import {createStore, combineReducers, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';
import GlobalDucks from './ducks';
import FindDucks from '~/modules/Find/ducks';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    FindDucks.search.lastSearches
  ]
}

const middlewares = applyMiddleware(thunk);
const reducers = combineReducers(Object.assign({},
  GlobalDucks,
  FindDucks
));

const persistedReducer = persistReducer(persistConfig, reducers)

// export default () => {
//   let store = createStore(persistedReducer, middlewares);
//   let persistor = persistStore(store);
//   return { store, persistor };
// }

export default createStore(reducers, middlewares);

