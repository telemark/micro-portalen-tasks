// A very ugly hack due to Compilo's setup
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const axios = require('axios')
const repackFeedCompilo = require('./repack-feed-compilo')
const { compilo } = require('../../config')
const logger = require('../logger')

module.exports = async user => {
  logger('info', ['getTasksCompilo', user])
  const options = {
    url: compilo.url,
    method: 'get',
    params: {
      x1: compilo.username,
      x2: compilo.password,
      x3: user
    }
  }
  try {
    const { data } = await axios(options)
    const repackedData = repackFeedCompilo(data)
    return repackedData
  } catch (err) {
    throw err
  }
}
