function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    if (arr.indexOf(num) == -1) {
        arr.push(num);
        arr.sort(function(a, b) {
            return a - b;
        });
        return arr.indexOf(num);
    }

    arr.sort(function(a, b) {
        return a - b;
    });
    
    return arr.lastIndexOf(num);
}

getIndexToIns([40, 60], 50);