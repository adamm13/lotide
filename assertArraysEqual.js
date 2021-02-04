
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



const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅ Assertation Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`🔴 Assertation Failed: ${arrOne} !== ${arrTwo}`);
  }
};

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => true
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])); // => false