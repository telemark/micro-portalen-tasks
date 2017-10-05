const getTasksCompilo = require('./compilo/get-task-compilo')
const getTasksVisma = require('./visma/get-task-visma')
const NodeCache = require('node-cache')
const jwtAuth = require('micro-jwt-auth')
const cache = new NodeCache({ stdTTL: 3600, checkperiod: 120 })
const logger = require('./logger')
const { JWT_SECRET } = require('../config')

module.exports = jwtAuth(JWT_SECRET)(async (req, res) => {
  const user = req.params.user

  const cachedUserTasks = cache.get(user)
  if (cachedUserTasks) {
    return cachedUserTasks
  }

  try {
    logger('info', ['getTasks', user])
    const [ vismaTasks, compiloTasks ] = await Promise.all([getTasksVisma(user), getTasksCompilo(user)])
    const payload = {
      user: user,
      data: [ ...vismaTasks, ...compiloTasks ]
    }

    cache.set(user, payload)
    return payload
  } catch (err) {
    logger('error', [err.message || err])
    throw err
  }
})
