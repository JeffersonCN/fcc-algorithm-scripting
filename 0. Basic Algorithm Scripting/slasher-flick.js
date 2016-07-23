function slasher(arr, howMany) {
    var newArr = [];
    
    for (var i = 0; i < howMany; i++) {
        newArr.push(arr.shift());
    }

    return arr;
}

slasher([1, 2, 3], 2);