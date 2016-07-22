// https://www.freecodecamp.com/challenges/symmetric-difference
function difference(firstArray, secondArray) {
    return firstArray
        // Returns firstArray - secondArray
        .filter(function(element) {
            return secondArray.indexOf(element) === -1;
        })
        // Remove duplicated values
        .filter(function(element, index, self) {
            return self.indexOf(element) === index;
        });
}

function sym() {
    var args = Array.prototype.slice.call(arguments, 0);

    return args.reduce(function(prev, curr) {
        var right = difference(prev, curr),
            left = difference(curr, prev);

        return right.concat(left);
    });
}

sym([1, 2, 3], [5, 2, 1, 4]);
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);