module.exports = {
  root: true,
  parser: 'babel-eslint',
  plugins: [
    'react-native',
    'react',
    'flowtype',
    'import',
    'better-styled-components',
  ],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  rules: {
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
  },
};
