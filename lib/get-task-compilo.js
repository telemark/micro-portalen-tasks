'use strict'

// A very ugly hack due to Compilo's setup
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const axios = require('axios')
const repackFeedCompilo = require('./repack-feed-compilo')
const config = require('../config')

module.exports = user => {
  return new Promise(async (resolve, reject) => {
    const url = `${config.SERVICES.compilo}?x1=${config.COMPILO_X1}&x2=${config.COMPILO_X2}&x3=${user}`
    axios.get(url)
      .then(result => resolve(repackFeedCompilo(result.data)))
      .catch(error => reject(error))
  })
}
