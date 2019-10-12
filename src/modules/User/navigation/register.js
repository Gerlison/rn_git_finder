import React from './node_modules/react';
import {Navigation} from './node_modules/react-native-navigation';
import { Provider } from './node_modules/react-redux'
import store from './node_modules/@/store'

import App from './node_modules/@/modules/Find/screens/ScreenName';

export default function registerComponents() {
  Navigation.registerComponentWithRedux(
    `navigation.Find.ScreenName`, () => App, Provider,store);
}
