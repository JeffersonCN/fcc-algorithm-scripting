function whatIsInAName(collection, source) {
    var arr,
        props = Object.keys(source);

    arr = collection.filter(function(element) {
        var count = 0;
        props.forEach(function(prop) {
            if (element[prop] == source[prop]) {
                count++;
            }
        }, this);

        return count == props.length;
    });

    return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });