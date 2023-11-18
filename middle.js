// TEST/ASSERTION FUNCTIONS
const eqArrays = function(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
  
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
  
    return true;
  };
  
  const assertArraysEqual = function(actual, expected) {
    const isEqual = eqArrays(actual, expected);
    const message = isEqual ? '✅ Arrays are equal' : '🛑 Arrays are not equal';
  
    console.log(message);
  };
  
  // ACTUAL FUNCTION
  const middle = function(array) {
    const length = array.length;
    const middleIndex = Math.floor(length / 2);
  
    if (length <= 2) {
      return [];
    } else if (length % 2 === 1) {
      return [array[middleIndex]];
    } else {
      return [array[middleIndex - 1], array[middleIndex]];
    }
  };
  
  // TEST CODE
  assertArraysEqual(middle([1]), []);                      // Expected: []
  assertArraysEqual(middle([1, 2]), []);                   // Expected: []
  assertArraysEqual(middle([1, 2, 3]), [2]);               // Expected: [2]
  assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);         // Expected: [3]
  assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);         // Expected: [2, 3]
  assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);   // Expected: [3, 4]
  