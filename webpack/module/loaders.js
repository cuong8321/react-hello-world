'use strict'
const jsregex = /\.(js|jsx|es[0-9]?x?)$/
const exclude = /node_modules|bower_components/

module.exports = [
  {
    test: jsregex,
    loader: 'babel-loader',
    exclude
  },
  {
    enforce: 'pre',
    test: jsregex,
    loader: 'standard-loader',
    exclude,
    options: {
      error: true,
      snazzy: true,
      parser: 'babel-eslint'
    }
  }
]
