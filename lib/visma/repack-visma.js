const Parser = require('xml2js-parser')
const parser = new Parser({ trim: true })

module.exports = async data => {
  try {
    const jsonData = await parser.parseString(data)
    const tasks = (jsonData.tasks.length < 1 || typeof jsonData.tasks.task === 'undefined') ? [] : jsonData.tasks.task
    return tasks.map(task => {
      return {
        systemid: 'visma',
        title: task['$'].text || '',
        url: task['$'].link || '',
        number: task['$'].number || '',
        timestamp: new Date().getTime()
      }
    })
  } catch (err) {
    throw err
  }
}
