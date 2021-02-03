
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters= function(someText) {
  let string = someText.split(" ").join(""); // removes spaces and joins all letters
  let results = {} //create empty array to store iterations

  for (let i = 0; i < string.length; i++) { //loop through the new string
   if (results[string[i]]) { 
      results[string[i]] += 1; //if that letter already passed add 1 to it
    } else {
      results[string[i]] = 1; // first time/ only letter is put here
    }
  }
  console.log(results);
  return results; //return the new object with letters and their number of times
};
 
countLetters("lighthouse in the house");
countLetters("Coding is going to make my brain explode")
countLetters("dasasa asasa elwe welrkwel dskfsdlkfj ldkjasld")