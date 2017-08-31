'use strict'
const {reverse} = require('../../lib/reverse-string')

test('Reverse: "abcdef', () => {
  expect(reverse('abcdef')).toBe('fedcba')
})
