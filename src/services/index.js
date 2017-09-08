const users = require('./users/users.service.js')
const dataService = require('./data-service/data-service.service.js')
const accounts = require('./accounts/accounts.service.js')
const data = require('./data/data.service.js')
module.exports = function() {
  const app = this // eslint-disable-line no-unused-vars
  app.configure(users)
  app.configure(dataService)
  app.configure(accounts)
  app.configure(data)
}
