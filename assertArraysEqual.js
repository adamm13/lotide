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

//console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => true
//console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])); // => false