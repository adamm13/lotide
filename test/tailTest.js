const tail = require("../tail")
const assertEqual = require('../assertEqual');

assertEqual(tail([5, 5]), 5);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(tail([13, 35345, 34534]), 14);
assertEqual(tail([]), "Hello");
assertEqual(tail([13]), 14);
assertEqual(tail([13, 14, 12, 13]), 13);