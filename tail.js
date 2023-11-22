// FUNCTION IMPLEMENTATION
const tail = function(arr) {
  if (arr.length <= 1) {
    return [];
  }
  return arr.slice(1).map(element => element);
};

module.exports = tail;
