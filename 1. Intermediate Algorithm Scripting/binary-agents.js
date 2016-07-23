// https://www.freecodecamp.com/challenges/binary-agents

function binaryAgent(str) {
    return str
        // Create array of binaries
        .split(" ")
        // Convert binaries to decimal ASCII codes
        .map(function(binary) {
            return parseInt(binary, 2);
        })
        // Convert ASCII codes to chars
        .map(function(charCode) {
            return String.fromCharCode(charCode);
        })
        // Join all together back to a Strings
        .join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");