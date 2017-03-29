var path = require('path');
var webpack = require('webpack');
var designsPath = path.join(__dirname, '..', 'content', 'jcr_root', 'etc', 'designs', 'ng2-aem', 'clientlib-site', 'js');
module.exports = {
  entry: {
    'app': './src/main.ts',
    'polyfills': [
      'core-js/es6',
      'core-js/es7/reflect',
      'zone.js/dist/zone'
    ]
  },
  output: {
    path: designsPath,
   filename: '[name].js'
  },
  module: {
    loaders: [
    { test: /\.ts$/, loader: 'ts-loader'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'polyfills'
    })
  ]
};
