// if array has 1-2 elements there is no middle, return empty
// if array has an ODD amount of elements, return single middle element
//if array has EVEN amount of elements, return the middle two elements.
const middle = function(array) {
  let answer = []
  if (array.length <= 2) {
    answer.push();
  } else if (array.length % 2 === 0) {
    answer.push(array[Math.floor((array.length - 1) / 2)])
    answer.push(array[Math.floor((array.length) / 2)])
    return answer
  } else {
    answer.push(array[Math.floor(array.length / 2)])
  }
  return answer
}


//console.log(middle([1, 2, 3, 4])) // => [2, 3]
//console.log(middle([1, 2, 3, 4, 5, 6]))
//console.log(middle([5, 6]))
//console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]))

module.exports = middle;