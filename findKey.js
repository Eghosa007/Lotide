const findKey = function(object, callback) {
    for (const key in object) {
      if (callback(object[key])) {
        return key;
      }
    }
    return undefined;
  };
  
  // Test cases
  const restaurantStars = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };
  
  assertEqual(findKey(restaurantStars, x => x.stars === 2), "noma");
  assertEqual(findKey(restaurantStars, x => x.stars === 3), "Akaleri");
  assertEqual(findKey(restaurantStars, x => x.stars === 4), undefined);
  assertEqual(findKey({}, x => x.stars === 2), undefined);
