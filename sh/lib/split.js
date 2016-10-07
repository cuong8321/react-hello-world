'use strict'
const {argv, stdout, stderr, exit} = require('process')
if (argv.length !== 5) {
  stderr.write('Require 3 arguments\n')
  exit(1)
}
const {2: string, 3: delimiter, 4: index} = argv
stdout.write(string.split(delimiter)[index] + '\n')
