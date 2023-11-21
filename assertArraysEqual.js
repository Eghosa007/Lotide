// assertArraysEqual.js
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("✅ Assertion Passed: Arrays are equal.");
  } else {
    console.log("❌ Assertion Failed: Arrays are not equal.");
  }
};

module.exports = assertArraysEqual;
