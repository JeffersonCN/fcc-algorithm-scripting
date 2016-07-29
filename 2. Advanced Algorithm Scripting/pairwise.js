// https://www.freecodecamp.com/challenges/pairwise

function pairwise(arr, arg) {
    var currVal, testVal,
        sum = 0,
        usedIndexes = [];

    for (var i = 0, len = arr.length; i < len; i++) {
        currVal = arr[i];
        for (var j = i + 1; j < len; j++) {
            testVal = arr[j];
            if (currVal + testVal === arg && usedIndexes.indexOf(i) === -1 && usedIndexes.indexOf(j) === -1) {
                sum += i + j;
                usedIndexes.push(i, j);
            }
        }
    }

    return sum;
}

pairwise([1, 4, 2, 3, 0, 5], 7);
pairwise([1, 3, 2, 4], 4);
pairwise([1, 1, 1], 2);
pairwise([0, 0, 0, 0, 1, 1], 1);
pairwise([], 100);
