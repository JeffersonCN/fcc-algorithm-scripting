function chunkArrayInGroups(arr, size) {
    var groups = Math.ceil(arr.length / size),
        newArr = [];

    for (var i = 0; i < groups; i++) {
        newArr.push(arr.slice(size * i, size * i + size));
    }
    
    return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);