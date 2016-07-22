// https://www.freecodecamp.com/challenges/roman-numeral-converter

function convert(num) {
    if (num < 1 || num > 3999) {
        return;
    }

    function romanNumeral(_numeral, _value) {
        this.numeral = _numeral;
        this.value = _value;
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

    var arabicToRoman = function(arabic) {

        var result = "";

        romanNumerals.forEach(function(roman) {
            while (arabic >= roman.value && arabic !== 0) {
                result += roman.numeral;
                arabic -= roman.value;
            }
        }, this);

        return result;
    };

    return arabicToRoman(num);
}

convert(3999);