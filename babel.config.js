module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.ios.js',
            '.android.js',
            '.ios.jsx',
            '.android.jsx',
            '.js',
            '.jsx',
            '.json',
            '.ts',
            '.tsx',
            '.PNG',
            '.jpg'
          ],
          root: ['.'],
          alias: {
            '@api': './src/api',
            '@assets': './src/assets',
            '@components': './src/components',
            '@screens': './src/screens',
            '@customTypes': './src/customTypes',
            '@styles': './src/styles',
            '@hooks': './src/hooks'
          }
        }
      ],
      ['module:react-native-dotenv'],
      ['react-native-paper/babel']

      // ... other configs, if any
    ]
  };
};
