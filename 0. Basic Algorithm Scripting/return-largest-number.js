function largestOfFour(arr) {
    return arr.map(function(subarr) {
        return Math.max.apply(null, subarr);
    });
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);