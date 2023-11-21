// test/headTest.js

//const head = require('../head');
//const assertEqual = require('../assertEqual');

// TEST CASES
// Test Case 1: Check if head returns the first element of the array
//assertEqual(head([5, 6, 7]), 5);

// Test Case 2: Check if head returns the first string element of the array
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// Test Case 3: Check if head returns the only element in the array
//assertEqual(head([42]), 42);

// Test Case 4: Check if head returns undefined for an empty array
//assertEqual(head([]), undefined);

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});

it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });


