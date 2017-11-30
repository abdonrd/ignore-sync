'use strict'

const R = require('ramda')

const removeComment = R.compose(R.nth(0), R.split('#'))
const removeEmptyLines = R.reject((line) => line === '')

module.exports = R.compose(
  R.join('\n'),
  removeEmptyLines,
  R.map(R.compose(R.trim, removeComment)),
  R.split('\n')
)
