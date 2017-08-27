'use strict'
const path = require('path')
const BUILD_DIR = path.resolve(__dirname, '../src/client/public')
const APP_DIR = path.resolve(__dirname, '../dist')

const config = {
  entry: path.join(APP_DIR, 'index.jsx'),
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: require('./loaders.js')
  },
  plugins: require('./plugins.js')
}

module.exports = config
