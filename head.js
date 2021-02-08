const assertEqual = require('./assertEqual');

const head = function(actual) {
  let one = actual[0];
  return one;
};

//assertEqual(head([5, 6, 7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
//assertEqual(head([13, 35345, 34534]), 14);
//assertEqual(head([]), "Games");

module.exports = head
