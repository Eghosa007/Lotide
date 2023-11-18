// assertArraysEqual function
const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected)) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  // eqArrays function
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
  
  // letterPositions function
  const letterPositions = function(sentence) {
    const results = {};
  
    for (let i = 0; i < sentence.length; i++) {
      const letter = sentence[i];
      if (letter !== ' ') {
        if (!results[letter]) {
          results[letter] = [i];
        } else {
          results[letter].push(i);
        }
      }
    }
  
    return results;
  };
  
  // Test for letterPositions
  assertArraysEqual(letterPositions("hello").e, [1]);
  