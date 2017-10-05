const Xray = require('x-ray')
const cleanupText = require('./cleanup-text')
const xray = Xray()

module.exports = feed => {
  return new Promise((resolve, reject) => {
    xray(feed, 'li a', [{
      title: '',
      url: '@href'
    }]
    )((error, json) => {
      if (error) {
        throw error
      } else {
        const data = json.map(item => {
          return {
            systemid: 'compilo',
            title: cleanupText(item.title).trim(),
            url: item.url,
            timestamp: new Date().getTime()
          }
        })
        const filterData = data.filter(item => !/\(0\)/.test(item.title))
        resolve(filterData)
      }
    })
  })
}
