const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKey = function(obj, callback) {
  for (const key in obj){
    //console.log(" key -->" + obj[key])
    if (callback(obj[key])){
      return key;
    }
  }//returns undefined if no key is located
}


console.log(findKey({
  "GPU" : { price: 8 },
  "CPU" : { price: 6 },
  "ABC" : { price: 4 },
  "RAM" : { price: 2 },
  "HDD" : { price: 1 },
  "SSD" : { price: 3 }
}, part => part.price === 6));

assertEqual(findKey({
  "GPU" : { price: 8 },
  "CPU" : { price: 6 },
  "ABC" : { price: 4 },
  "RAM" : { price: 2 },
  "HDD" : { price: 1 },
  "SSD" : { price: 3 }
}, part => part.price === 6), "CPU");
