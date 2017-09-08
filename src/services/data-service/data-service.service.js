// Initializes the `data service` service on path `/data-service`
const createService = require('feathers-mongoose')
const createModel = require('../../models/data-service.model')
const hooks = require('./data-service.hooks')
const filters = require('./data-service.filters')

module.exports = function() {
  const app = this
  const Model = createModel(app)
  const paginate = app.get('paginate')

  const options = {
    name: 'data-service',
    Model,
    paginate,
  }

  // Initialize our service with any options it requires
  app.use('/data-service', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('data-service')

  service.hooks(hooks)

  if (service.filter) {
    service.filter(filters)
  }
}
