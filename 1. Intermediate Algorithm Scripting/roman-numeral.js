// https://www.freecodecamp.com/challenges/roman-numeral-converter
function romanNumeral(numeral, value) {
    this.numeral = numeral;
    this.value = value;
}

var romanNumerals = [
    new romanNumeral("M", 1000), new romanNumeral("CM", 900),
    new romanNumeral("D", 500), new romanNumeral("CD", 400),
    new romanNumeral("C", 100), new romanNumeral("XC", 90),
    new romanNumeral("L", 50), new romanNumeral("XL", 40),
    new romanNumeral("X", 10), new romanNumeral("IX", 9),
    new romanNumeral("V", 5), new romanNumeral("IV", 4),
    new romanNumeral("I", 1)
];

// function arabicToRoman(arabic) {
//     var result = "";

//     romanNumerals.forEach(function(roman) {
//         while (arabic >= roman.value && arabic !== 0) {
//             result += roman.numeral;
//             arabic -= roman.value;
//         }
//     });

//     return result;
// }

function convertToRoman(num) {
    var result = "";

    if (num < 1 || num > 3999) {
        return;
    }

    romanNumerals.forEach(function(roman) {
        while (num >= roman.value && num !== 0) {
            result += roman.numeral;
            num -= roman.value;
        }
    });

    return result;
}

convertToRoman(3999);