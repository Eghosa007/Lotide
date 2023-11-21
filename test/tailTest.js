// test/tailTest.js
const tail = require('../tail'); // Adjust the path based on your file structure
const assertEqual = require('../assertEqual');

// TEST CASES
// Test Case 1: Check if tail returns the array without the first element
assertEqual(JSON.stringify(tail([5, 6, 7])), JSON.stringify([6, 7]));

// Test Case 2: Check if tail returns the array without the first element for strings
assertEqual(JSON.stringify(tail(["Hello", "Lighthouse", "Labs"])), JSON.stringify(["Lighthouse", "Labs"]));

// Test Case 3: Check if tail returns an empty array for an array with a single element
assertEqual(JSON.stringify(tail([42])), JSON.stringify([]));

// Test Case 4: Check if tail returns an empty array for an empty array
assertEqual(JSON.stringify(tail([])), JSON.stringify([]));
