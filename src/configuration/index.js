const config = require('config')

exports.get = key => {
  return process.env[key] || config[key]
}
