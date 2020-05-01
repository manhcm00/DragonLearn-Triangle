var assert = require('assert');
var say = require('./function-demo');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('Demo', function() {
  describe('#sayHello()', function() {
    it('return Hello', function() {
      assert.equal(say.sayHello(), 'hello');
    });
  });
});
