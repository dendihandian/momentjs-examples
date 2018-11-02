const moment = require('moment')
const assert = require('assert')

describe('Parse', function() {
  it('YYYY-MM-DD', function() {
    assert.equal(moment('1994-08-17').isValid(), true)
  })
})
