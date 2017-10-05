const { router, get } = require('microrouter')
const getReadme = require('./lib/get-readme')
const getTasks = require('./lib/get-tasks')

module.exports = router(
  get('/', getReadme),
  get('/user/:user', getTasks)
)
