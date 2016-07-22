// https://www.freecodecamp.com/challenges/sum-all-numbers-in-a-range

function sumAll(arr) {
    var lowest = Math.min.apply(null, arr),
        highest = Math.max.apply(null, arr),
        allNumbers = [],
        sum;

    for (var i = lowest; i <= highest; i++) {
        allNumbers.push(i);
    }

    sum = allNumbers.reduce(function(previous, current) {
        return previous + current;
    });

    return sum;
}

sumAll([1, 4]);