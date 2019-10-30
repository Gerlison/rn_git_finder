import React from 'react';
import {Navigation} from 'react-native-navigation';
import ProviderHOC from '~shared/helpers/ProviderHOC';

import SearchScreen from '../screens/SearchScreen';

export default function registerComponents() {
  Navigation.registerComponent(
    `navigation.Find.SearchScreen`, () => ProviderHOC(SearchScreen)
  );
}
