// https://www.freecodecamp.com/challenges/smallest-common-multiple

function isPrime(num) {
    var prime = true,
        div = 2;

    while (prime === true && div !== num) {
        if (num % div === 0) {
            prime = false;
        }
        div++;
    }

    return prime;
}

function getSequencialNumbers(start, end) {
    var numbers = [];

    for (var i = start; i <= end; i++) {
        numbers.push(i);
    }

    return numbers;
}

function mapFunction(val) {
            if (val === 1) {
                count++;
            }

            if (val % divisor === 0) {
                return val / divisor;
            } else {
                notDivisible++;
            }

            return val;
        }

function getMMC(numbers) {
    var found = false,
        count,
        notDivisible,
        divisor = 2,
        multiples = [],
        mmc;

    while (!found) {
        if (!isPrime(divisor)) {
            divisor++;
            continue;
        }

        count = 0;
        notDivisible = 0;
        numbers = numbers.map(mapFunction);

        if (count === numbers.length) {
            found = true;
        } else if (notDivisible === numbers.length) {
            divisor++;
        } else {
            multiples.push(divisor);
        }
    }

    mmc = multiples.reduce(function(prev, curr) {
        return prev * curr;
    });

    return mmc;
}

function smallestCommons(arr) {
    var start = Math.min.apply(null, arr),
        end = Math.max.apply(null, arr),
        divisors = getSequencialNumbers(start, end);

    return getMMC(divisors);
}

smallestCommons([1, 5]);