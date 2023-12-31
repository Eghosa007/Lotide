// test/middleTest.js
const assert = require('chai').assert;
const middle = require('../middle');

describe('middle', function() {
  it('should return an empty array for a single-element array', function() {
    assert.deepEqual(middle([1]), []);
  });

  it('should return an empty array for a two-element array', function() {
    assert.deepEqual(middle([1, 2]), []);
  });

  it('should return [2] for [1, 2, 3]', function() {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('should return [3] for [1, 2, 3, 4, 5]', function() {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it('should return [2, 3] for [1, 2, 3, 4]', function() {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it('should return [3, 4] for [1, 2, 3, 4, 5, 6]', function() {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
