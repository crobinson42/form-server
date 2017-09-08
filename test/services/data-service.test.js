const assert = require('assert');
const app = require('../../src/app');

describe('\'data service\' service', () => {
  it('registered the service', () => {
    const service = app.service('data-service');

    assert.ok(service, 'Registered the service');
  });
});
