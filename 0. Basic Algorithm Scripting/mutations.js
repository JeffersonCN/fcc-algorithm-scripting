function mutation(arr) {
    var contains = true;
    for (var i = 0; i < arr[1].length; i++) {
        if (arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) == -1) {
            contains = false;
        }
    }
    return contains;
}

mutation(["hello", "hey"]);