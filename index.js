const { router, get } = require('microrouter')
const readme = require('./lib/readme')
const getTasks = require('./lib/get-tasks')

module.exports = router(
  get('/', readme),
  get('/user/:user', getTasks)
)
