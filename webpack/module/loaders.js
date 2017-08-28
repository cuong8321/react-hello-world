'use strict'
const {js: jsregex, exclude} = require('../lib/regexes')

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
