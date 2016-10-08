'use strict'
const {join} = require('path')
const {readdirSync} = require('fs')
const {exit} = require('process')
const {info, error} = global.console
const skip = new Set([
  'node_modules',
  'package.json',
  'lib',
  'index.js'
])
const list = readdirSync(__dirname)
  .filter(item => !skip.has(item))
  .map(item => join(__dirname, item))
  .map(require)
Promise.all(list)
  .then(
    response => {
      info('Deployment finished successfully')
      info('response', response)
      exit(0)
    }
  )
  .catch(
    response => {
      error('Failed to Deploy')
      info('response', response)
      exit(1)
    }
  )
