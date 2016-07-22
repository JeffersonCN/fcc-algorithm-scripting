// https://www.freecodecamp.com/challenges/sorted-union

function uniteUnique(arr1, arr2, arr3) {
    var args = Array.prototype.slice.call(arguments);
    var result = [];

    result = args.reduce(function(a, b) {
        b = b.filter(function(val) {
            return a.indexOf(val) == -1;
        });

        return a.concat(b);
    });

    return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);