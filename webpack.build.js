'use strict';

var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var bourbon = require('node-bourbon').includePaths;
var config = require('./webpack.config.js');

config.devtool = 'source-map';
config.entry = {
  'angular-sparklines': './component/index.js'
};
config.output.filename = 'angular-sparklines.js';
config.output.library = 'sjSparklines';
config.output.libraryTarget = 'umd';

config.module.loaders = [
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css!autoprefixer?browsers=last 2 versions!sass?includePaths[]=' + bourbon)
  }
].concat(config.module.loaders);

config.plugins.push(
  new ExtractTextPlugin('angular-sparklines.css'),
  new WebpackNotifierPlugin({title: 'Webpack'}),
  new webpack.optimize.DedupePlugin()
);
module.exports = config;
