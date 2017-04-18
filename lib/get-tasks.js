'use strict'

const config = require('../config')

module.exports = (request) => {
  return new Promise((resolve, reject) => {
    resolve(config)
  })
}
