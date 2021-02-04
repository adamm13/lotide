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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: "${inspect(actual)}" === "${inspect(expected)}"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${inspect(actual)}" !== "${inspect(expected)}"`);
  }
}
