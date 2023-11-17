// without.js

// Copy and paste your assertArraysEqual function here
const assertArraysEqual = function(arr1, arr2) {
    // Implementation of assertArraysEqual function
  };
  
  // Implement the without function
  const without = function(source, itemsToRemove) {
    return source.filter(item => !itemsToRemove.includes(item));
  };
  
  // Test cases
  const words = ["hello", "world", "lighthouse"];
  
  // Test case 1
  const result1 = without([1, 2, 3], [1]);
  assertArraysEqual(result1, [2, 3]); // => should PASS
  
  // Test case 2
  const result2 = without(["1", "2", "3"], [1, 2, "3"]);
  assertArraysEqual(result2, ["1", "2"]); // => should PASS
  
  // Test case 3: Ensure the original array is not modified
  without(words, ["lighthouse"]);
  assertArraysEqual(words, ["hello", "world", "lighthouse"]); // => should PASS
  