import React from 'react';
import {Navigation} from 'react-native-navigation';
import { Provider } from 'react-redux'
import store from '~/store'

import App from '../screens/SearchScreen';

export default function registerComponents() {
  Navigation.registerComponentWithRedux(
    `navigation.Find.SearchScreen`, () => App, Provider,store);
}
