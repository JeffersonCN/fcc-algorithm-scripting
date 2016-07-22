// https://www.freecodecamp.com/challenges/diff-two-arrays

function getExclusiveElements(firstArr, secondArr) {
    return firstArr.filter(function(element) {
        return secondArr.indexOf(element) === -1;
    });
}

function diffArray(arr1, arr2) { 
    var left = getExclusiveElements(arr1, arr2),
        right = getExclusiveElements(arr2, arr1);
    
    return right.concat(left);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);