// FUNCTION IMPLEMENTATION
const head = function(array) {
    if (array.length === 0) {
      return undefined;
    }
    return array[0];
  };
  
  // TEST CASES
  assertEqual(head([5, 6, 7]), 5);
  assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  
  // Additional test cases
  assertEqual(head([42]), 42); // Array with only one element should return that one element
  assertEqual(head([]), undefined); // Empty array should yield undefined as its head
  