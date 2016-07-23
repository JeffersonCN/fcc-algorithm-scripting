function rot13(str) { // LBH QVQ VG!
    var code = null,
        decoded = "";

    for (var i = 0; i < str.length; i++) {
        code = str.charCodeAt(i);

        if (code >= 65 && code <= 77) {
            decoded += String.fromCharCode(code + 13);
        } else if (code >= 78 && code <= 90) {
            decoded += String.fromCharCode(code - 13);
        } else {
            decoded += str[i];
        }
    }

    return decoded;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");