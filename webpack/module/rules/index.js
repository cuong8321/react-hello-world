'use strict'
const path = require('path')
const {readFileSync} = require('fs')
const yaml = require('js-yaml')
const {js: jsregex, exclude} = require('../../lib/regexes')

const loadYamlFile = filename =>
  yaml.safeLoad(readFileSync(path.resolve(__dirname, filename), 'utf8'))

module.exports = [
  {
    test: jsregex,
    use: loadYamlFile('use-javascript.yaml'),
    exclude
  }
]
