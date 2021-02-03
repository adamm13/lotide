/*const assertArraysEqual = function(array1, array2)
{
  if(array1.length === array2.length){
    for (var i = 0; i < array1.length; i ++){
      if(array1[i] !== array2[i]){ 
        //console.log("Arrays are not the same");
        return "Arrays are NOT the same";
      }
    }
  }
  else
  {//console.log("arrays not same length, therefore not the same");
    return "Arrays are NOT the same";
  }
return "Arrays are the Same";


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
*/
const letterPositions = function(sentence) {
  const results = {}; // empty object to hold results
  for (let i  = 0; i < sentence.length; i++){ // loop through sentence string
    if (sentence[i] !== ' '){  //if variable is not a space/empty
      if (!results[sentence[i]]) { 
        results[sentence[i]] = [i] //adding the new instance of the variable a new array
      } else {
        results[sentence[i]].push(i); // if that instace exists add it to existing array
      }
    }
  }
  return results
}

console.log(letterPositions("Testing 101"))