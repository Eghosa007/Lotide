// test/headTest.js

const head = require('../head');
const assertEqual = require('../assertEqual');

// TEST CASES
// Test Case 1: Check if head returns the first element of the array
assertEqual(head([5, 6, 7]), 5);

// Test Case 2: Check if head returns the first string element of the array
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// Test Case 3: Check if head returns the only element in the array
assertEqual(head([42]), 42);

// Test Case 4: Check if head returns undefined for an empty array
assertEqual(head([]), undefined);

