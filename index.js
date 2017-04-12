'use strict'

const readFileSync = require('fs').readFileSync
const marked = require('marked')
const { parse } = require('url')
const { json, send } = require('micro')

module.exports = async (request, response) => {
  const {pathname, query} = await parse(request.url, true)
  const data = request.method === 'POST' ? await json(request) : query
  console.log(data)

  if (!['/'].includes(pathname)) {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Credentials', 'true')
    response.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, POST')
    response.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers')
  }
  if (request.method === 'OPTIONS') {
    response.end()
  } else {
    const readme = readFileSync('./README.md', 'utf-8')
    const html = marked(readme)
    send(response, 200, html)
  }
}
