const assertArraysEqual = function(array1, array2)
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


// if array has 1-2 elements there is no middle, return empty
// if array has an ODD amount of elements, return single middle element
//if array has EVEN amount of elements, return the middle two elements.
const middle = function(array) {
  let answer = []
  if (array.length <= 2) {
    answer.push();
  } else if (array.length % 2 === 0){
     answer.push(array[Math.floor((array.length - 1) / 2)])
     answer.push(array[Math.floor((array.length) / 2)])
     return answer
  } else {
     answer.push(array[Math.floor(array.length / 2)])
  }
  return answer
}

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6]))
console.log(middle([5, 6]))
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]))