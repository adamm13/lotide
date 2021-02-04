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

const words = ["Teemo", "Zac", "Ezreal", "Evelynn", "Morde"]

const map = function(array, callback){ //map function taking in array and callback function
  const results =[] //empty results array to push answer
  for (let item of array){ //for of array to loop through array
    results.push(callback(item)) // push items called for in "callback function" [0] 
  }
  return results; //return answer
}

const results1 = map(words, word => word[0]); // word => is callback function looking for index 0 of array.
assertArraysEqual(results1, ['k','x','v','o','t'])

const results2 = map(words, word => word[2]);
assertArraysEqual(results2, ['t','t', "t", 'o', undefined]); //checking for undefied

const results3 = map(words, word => word.length); //array.length
assertArraysEqual(results3, [5, 3, 6, 7, 5]);