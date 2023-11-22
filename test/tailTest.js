const assert = require('chai').assert;
const tail = require('../tail');

describe('tail', function() {
  it('should return an empty array for a single-element array', function() {
    assert.deepEqual(tail([1]), []);
  });

  it('should return an empty array for a two-element array', function() {
    assert.deepEqual(tail([1, 2]), []);
  });

  it('should return [2, 3] for [1, 2, 3]', function() {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it('should return [3, 4, 5] for [1, 2, 3, 4, 5]', function() {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });

  it('should return [3, 4] for [1, 2, 3, 4]', function() {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });

  it('should return [4, 5, 6] for [1, 2, 3, 4, 5, 6]', function() {
    assert.deepEqual(tail([1, 2, 3, 4, 5, 6]), [2, 3, 4, 5, 6]);
  });
});
