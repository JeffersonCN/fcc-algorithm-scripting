// https://www.freecodecamp.com/challenges/sum-all-primes

function isPrime(num) {
    var prime = true,
        div = 2;

    while (prime === true && div != num) {
        if (num % div === 0) {
            prime = false;
        }
        div++;
    }

    return prime;
}

function getPrimesUpTo(num) {
    var primes = [];

    for (var i = 2; i <= num; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}

function sumPrimes(num) {
    return getPrimesUpTo(num)
        .reduce(function(previous, current) {
            return previous + current;
        });
}

sumPrimes(10);