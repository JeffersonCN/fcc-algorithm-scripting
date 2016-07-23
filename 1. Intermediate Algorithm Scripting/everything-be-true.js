// https://www.freecodecamp.com/challenges/everything-be-true

function truthCheck(collection, pre) {
    // Is everyone being true?
    var counter = 0;
    collection.forEach(function(element) {
        if (element[pre])
            counter++;
        else
            return false;
    });

    return counter == collection.length;
}

truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex");
