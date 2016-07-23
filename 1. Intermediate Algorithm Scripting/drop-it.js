// https://www.freecodecamp.com/challenges/drop-it

function dropElements(arr, func) {
  // Drop them elements.
  while (func(arr[0]) === false) {
    arr.shift();
  }
  
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });