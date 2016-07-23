// https://www.freecodecamp.com/challenges/arguments-optional

function isNumeric(num) {
    if ((num - 0) === num && ('' + num).trim().length > 0)
        return num;
    else
        return undefined;
}

function addTogether() {
    var args = Array.prototype.slice.call(arguments),
        len = args.length,
        a = args[0] || 0,
        b = args[1] || 0;

    function sumTwoAnd(num) {
        console.log("a: " + a);
        return isNumeric(a + num);
    }

    if (len > 1)
        return isNumeric(a + b);
    else {
        if (isNumeric(a))
            return sumTwoAnd;
        else
            return undefined;
    }
}

addTogether(2, 3);