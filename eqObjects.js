
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  let success = true;

  if (arr1.length !== arr2.length) {
    success = false //if arrays arent the same length it will fail.
  }
  for (let i = 0; i < arr1.length; i++) { 
    if (arr1[i] !== arr2[i]) { //if theyre the same length we then check for the same values within.
      success = false
    }
  }
  return success;
}

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) { // checking to see if all the keys and values in the objects are the same
    return false; //return false
  } else {
    for (let i in object1) { // for in to check all properties in the object by strings
      if ((Array.isArray(object1[i]) && Array.isArray(object2[i]))) { //array.isArray checking to see if value of [i] is an array or not
        if (eqArrays(object1[i], object2[i]) === false) { // if it is not an array (eqArray function) return false
          return false
        }
      } else {
        if (object1[i] !== object2[i]) { //if value is not equal to other object return false
          return false;
        }
      }
    }
    return true; // otherwise return true
  }
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

