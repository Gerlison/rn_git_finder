import React from 'react';
import {Navigation} from 'react-native-navigation';
import { Provider } from 'react-redux'
import store from '~/store'

import App from '~/modules/BoilerPlate/screens/ScreenName';

export default function registerComponents() {
  Navigation.registerComponentWithRedux(
    `navigation.BoilerPlate.ScreenName`, () => App, Provider,store);
}
