import {createStore, combineReducers, applyMiddleware} from 'redux';
import ducks from './ducks';
import thunk from 'redux-thunk';
import tron from 'reactotron-react-native';

const middlewares = applyMiddleware(thunk);
const reducers = combineReducers(ducks);

export default createStore(reducers, middlewares);
