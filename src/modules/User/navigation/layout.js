import {Navigation} from 'react-native-navigation';
import registerComponents from './register';

registerComponents();

export default {
  stack: {
    children: [
      {
        component: {
          id: "User.ProfileScreen",
          name: 'navigation.User.ProfileScreen',
        },
      }
    ]
  }
};
