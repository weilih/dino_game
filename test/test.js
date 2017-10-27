var assert = require('assert');
var hello = require('../asset');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('hello', function() {
  it('should return "hello world"', function(){
    assert.equal(hello('world'), "hello world");
  })
})
