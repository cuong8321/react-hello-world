'use strict'
const {join} = require('path')
const {readdirSync} = require('fs')
const skip = new Set([
  'node_modules',
  'package.json',
  'lib',
  'index.js'
])
readdirSync(__dirname)
  .filter(item => !skip.has(item))
  .map(item => join(__dirname, item))
  .forEach(require)
