import Find from '~/modules/Find/navigation/layout';
import User from '~/modules/User/navigation/layout';

export default {
  stack: {
    children: [Find],
    options: {
      topBar: {
        visible: false,
      },
    },
  },
};
