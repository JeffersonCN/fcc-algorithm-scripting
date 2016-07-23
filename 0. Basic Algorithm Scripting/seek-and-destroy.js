function destroyer(arr) {
    // Remove all the values
    for (var i = 0, arg; i < arguments.length; i++) {
        arg = arguments[i];
        arr = arr.filter(function(value) {
            return value != arg;
        });
    }
    return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);