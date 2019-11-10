import React from 'react';
import {Navigation} from 'react-native-navigation';
import ProviderHOC from '~shared/helpers/ProviderHOC';

import ProfileScreen from '~/modules/User/screens/ProfileScreen';
import RepositoryScreen from '~/modules/User/screens/RepositoryScreen';

export default function registerComponents() {
  Navigation.registerComponent(
    `navigation.User.ProfileScreen`, () => ProviderHOC(ProfileScreen)
  );

  Navigation.registerComponent(
    `navigation.User.RepositoryScreen`, () => RepositoryScreen
  );
}
