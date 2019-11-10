if (__DEV__) {
  import('./reactotron.config').then(() =>
    console.log('Reactotron Configured'),
  );
}

import { Navigation } from 'react-native-navigation';
import layout from '~/navigation/layout';
import tron from 'reactotron-react-native';

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: layout,
  });
});
