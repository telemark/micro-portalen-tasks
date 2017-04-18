'use strict'

const Xray = require('x-ray')
const cleanupText = require('./cleanup-text')
const xray = Xray()

module.exports = feed => {
  xray(feed, 'li a', [{
    title: '',
    url: '@href'
  }]
  )((error, json) => {
    if (error) {
      throw error
    } else {
      const data = json.map(item => Object.assign({systemid: 'compilo', title: cleanupText(item.title).trim(), url: item.url, timestamp: new Date().getTime()}))
      return data.filter(item => !/\(0\)/.test(item.title))
    }
  })
}
