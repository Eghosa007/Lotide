// assertArraysEqual.js

// Copy and paste your eqArrays function here
const eqArrays = function(arr1, arr2) {
    // Implementation of eqArrays function
  };
  
  // Implement the assertArraysEqual function
  const assertArraysEqual = function(arr1, arr2) {
    if (eqArrays(arr1, arr2)) {
      console.log("✅ Assertion Passed: Arrays are equal.");
    } else {
      console.log("❌ Assertion Failed: Arrays are not equal.");
    }
  };
  
  // Example usage:
  assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
  assertArraysEqual([1, 2, 3], [3, 2, 1]); // => should FAIL
  assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
  assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => should FAIL
  