import React from 'react';
import {Navigation} from 'react-native-navigation';
import ProviderHOC from '~shared/helpers/ProviderHOC';

import App from '~/modules/User/screens/ProfileScreen';

export default function registerComponents() {
  Navigation.registerComponent(
    `navigation.User.ProfileScreen`, () => ProviderHOC(App)
  );
}
