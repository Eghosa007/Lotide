const eqArrays = function(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  };
  
  const assertArraysEqual = function(actual, expected) {
    const message = eqArrays(actual, expected)
      ? `✅ Assertion Passed: ${actual} === ${expected}`
      : `🛑 Assertion Failed: ${actual} !== ${expected}`;
    console.log(message);
  };
  
  const map = function(array, callback) {
    const results = [];
    for (let item of array) {
      results.push(callback(item));
    }
    return results;
  };
  
  // Test cases
  const numbers = [1, 2, 3, 4, 5];
  
  // Test 1: Double each number
  const result1 = map(numbers, num => num * 2);
  assertArraysEqual(result1, [2, 4, 6, 8, 10]);
  
  // Test 2: Square each number
  const result2 = map(numbers, num => num ** 2);
  assertArraysEqual(result2, [1, 4, 9, 16, 25]);
  
  // Test 3: Convert numbers to strings
  const result3 = map(numbers, num => num.toString());
  assertArraysEqual(result3, ['1', '2', '3', '4', '5']);
  