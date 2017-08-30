'use strict'
const {js: jsregex, exclude} = require('../lib/regexes')

module.exports = [
  {
    test: jsregex,
    use: [
      'babel-loader',
      {
        loader: 'standard-loader',
        options: {
          options: {
            error: true,
            snazzy: true,
            parser: 'babel-eslint'
          }
        }
      }
    ],
    exclude
  }
]
