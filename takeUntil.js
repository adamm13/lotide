
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


const takeUntil = function(array, callback) {
  let answer = []
   for (let value of array){
     //console.log('value: ', value, 'callback: ', callback(value))
     if (callback(value) === false) {
       answer.push(value)
     } else {
       break;
     }
   }
   return answer
}
/*
const takeUntil = function(array, callback) {
  let answer = []
  for (i = 0; i < array.length; i++){
    if (callback(array[i])){
      answer.push(i)
      callback()
    }
  }
  return answer
}
*/
const array = [1, 2, 5, 7, 2, -1, 2, 4, 0, 5];
const results1 = takeUntil(array, ball => ball < 0);
console.log(assertArraysEqual(results1,[1, 2, 5, 7, 2, -1, 2, 4, 0, 5]));