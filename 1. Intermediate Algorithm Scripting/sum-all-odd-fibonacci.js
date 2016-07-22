// https://www.freecodecamp.com/challenges/sum-all-odd-fibonacci-numbers

function getNextFib(arr) {
    return arr[arr.length - 2] + arr[arr.length - 1];
}

function sumFibs(num) {
    var sequence = [0, 1, 1],
        next = getNextFib(sequence);

    while (next <= num) {
        sequence.push(next);
        next = getNextFib(sequence);
    }

    return sequence
        .filter(function(val) {
            if (val % 2 !== 0) {
                return val;
            }
        })
        .reduce(function(previous, current) {
            return previous + current;
        });
}

sumFibs(4);