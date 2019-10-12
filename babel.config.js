module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-flow'],
  plugins: [
    'babel-plugin-styled-components',
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./src'],
        alias: {
          '@': './src',
          '@icons': './src/assets/icons',
          '@fonts': './src/assets/fonts',
          '@images': './src/assets/images',
          '@shared': './src/shared',
        },
        extensions: ['.js', '.ios.js', '.android.js'],
      },
    ],
  ],
};
