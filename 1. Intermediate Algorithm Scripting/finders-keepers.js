// https://www.freecodecamp.com/challenges/finders-keepers

function findElement(arr, func) {
  var newArr = arr.filter(func);
  
  return newArr[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
