'use strict'
const {join} = require('path')
const {Yield} = require('x-iterable').createClass

const yieldof = fn =>
  (...args) => new Yield(fn(...args))

const readdirRecursiveSync = yieldof(
  function * fn (dir = '', fs = require('fs')) {
    const {readdirSync, statSync} = fs
    for (const item of readdirSync(dir)) {
      const fullpath = join(dir, item)
      yield fullpath
      if (statSync(fullpath).isDirectory()) yield * fn(fullpath)
    }
  }
)

module.exports = {
  readdirRecursiveSync
}
