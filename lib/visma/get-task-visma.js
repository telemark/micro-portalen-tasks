const axios = require('axios')
const { visma } = require('../../config')
const repackVisma = require('./repack-visma')
const logger = require('../logger')

module.exports = async user => {
  logger('info', ['getTasksVisma', user])
  const httpOptions = {
    url: `${visma.url}${user}`,
    method: 'get',
    auth: {
      username: visma.username,
      password: visma.password
    }
  }

  try {
    const { data } = await axios(httpOptions)
    const repacked = repackVisma(data)
    return repacked
  } catch (err) {
    console.error(err)
    throw err
  }
}
