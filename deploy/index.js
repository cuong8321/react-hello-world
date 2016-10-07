'use strict'
const {join} = require('path')
const {readdirSync} = require('fs')
const {stderr, stdout, exit} = require('process')
const skip = new Set([
  'node_modules',
  'package.json',
  'index.js'
])
readdirSync(__dirname)
  .filter(item => !skip.has(item))
  .map(item => join(__dirname, item))
  .forEach(require)
