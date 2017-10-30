const { JWT_SECRET, CACHE } = require('../config')
const getTasksCompilo = require('./compilo/get-task-compilo')
const getTasksVisma = require('./visma/get-task-visma')
const NodeCache = require('node-cache')
const cors = require('micro-cors')()
const jwtAuth = require('micro-jwt-auth')
const cache = CACHE ? new NodeCache({ stdTTL: 3600, checkperiod: 120 }) : false
const logger = require('./logger')

const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))

const handle = async (req, res) => {
  const user = req.params.user

  if (cache) {
    const cachedUserTasks = cache.get(user)
    if (cachedUserTasks) {
      return cachedUserTasks
    }
  }

  try {
    logger('info', ['getTasks', user])
    const [ vismaTasks, compiloTasks ] = await Promise.all([getTasksVisma(user), getTasksCompilo(user)])
    const payload = {
      user: user,
      data: [ ...vismaTasks, ...compiloTasks ]
    }

    if (cache) {
      cache.set(user, payload)
    }

    return payload
  } catch (err) {
    logger('error', [err.message || err])
    throw err
  }
}

module.exports = compose(
  jwtAuth(JWT_SECRET),
  cors
)(handle)
