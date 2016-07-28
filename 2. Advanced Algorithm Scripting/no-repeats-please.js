// https://www.freecodecamp.com/challenges/no-repeats-please

function permute(chars, start, end, permutations) {
    var j, aux,
    re = /(.)\1+/g; // match consecutive identical chars

    if (start === end) {
        if (!re.test(chars.join(''))) {
            permutations.push(chars.join(''));
        }
    } else {
        for (j = start; j <= end; j++) {
            aux = chars[start];
            chars[start] = chars[j];
            chars[j] = aux;
            permute(chars, start + 1, end, permutations);
            aux = chars[start];
            chars[start] = chars[j];
            chars[j] = aux;
        }
    }
}

function permAlone(str) {
    var permutations = [],
        charsArr = str.split('');

    permute(charsArr, 0, str.length-1, permutations);

    return permutations.length;
}
