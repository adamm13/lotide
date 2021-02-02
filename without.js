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
const without = function(arr1,arr2){
  let missing = []
  for(let i = 0; i < arr1.length; i++){
    if (!arr2.includes(arr1[i])){
      missing.push(arr1[i])
    } 
  }
  return missing
}

//const words = ["hello", "world", "lighthouse"];
//without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
//console.log(assertArraysEqual(words, ["Adam", "world", "lighthouse"]));
//console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
//console.log(without([1, 2, 3], [1]))
//console.log(without(["1", "2", "3"], [1, 2, "3"]))
//console.log(without(["1", "2", "3"], [1, 2, "3", 4, 12]))
