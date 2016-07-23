function factorialize(num) {
    var fact = 1;

    for (var i = num; i > 1; i--) {
        fact *= i;
    }

    return fact;
}

factorialize(5);