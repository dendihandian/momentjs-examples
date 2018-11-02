const moment = require('moment')
const assert = require('assert')

describe('Parse', function() {
  describe('Now', function() {
    it('Empty Parameter', function() {
      assert.equal(moment().isValid(), true)
    })
    it('Empty Array Parameter', function() {
      assert.equal(moment([]).isValid(), true)
    })
    it('Empty Object Parameter', function() {
      assert.equal(moment({}).isValid(), true)
    })
  })
  describe('String', function() {
    describe('YYYY-MM-DD', function() {
      const indonesiaIndependenceDay = '1994-08-17'
      describe(indonesiaIndependenceDay, function(indonesiaIndependenceDay) {
        it ('.isValid()', function() {
          assert.equal(moment(indonesiaIndependenceDay).isValid(), true)
        })
      })
    })
  })
})
