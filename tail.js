
const tail = function(array) {
  let one = array.slice(-1);
  return one[0];
};

/*
const tail = function(actual) {
  let one = [actual.slice(1)];
  return one;
};*/

//assertEqual(tail([5, 5]), 5);
//assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
//assertEqual(tail([13, 35345, 34534]), 14);
//assertEqual(tail([]), "Hello");
//assertEqual(tail([13]), 14);
//assertEqual(tail([13, 14, 12, 13]), [13]);

module.exports = tail;