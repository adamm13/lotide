const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(actual) {
  let one = [actual.slice(1)];
  return one;
};


assertEqual(tail([5,5]), 5);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(tail([13,35345,34534]), 14);
assertEqual(tail([]), "Hello");
assertEqual(tail([13]), 14);