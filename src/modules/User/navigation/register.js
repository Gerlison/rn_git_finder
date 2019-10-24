import React from 'react';
import {Navigation} from 'react-native-navigation';
import { Provider } from 'react-redux'
import store from '~/store'

import App from '~/modules/User/screens/ProfileScreen';

export default function registerComponents() {
  Navigation.registerComponentWithRedux(
    `navigation.User.ProfileScreen`, () => App, Provider,store);
}
