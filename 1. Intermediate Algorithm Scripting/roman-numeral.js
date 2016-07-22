// https://www.freecodecamp.com/challenges/roman-numeral-converter

var romanNumerals = [
    {numeral:"M", value: 1000}, {numeral:"CM", value: 900},
    {numeral:"D", value: 500}, {numeral:"CD", value: 400},
    {numeral:"C", value: 100}, {numeral:"XC", value: 90},
    {numeral:"L", value: 50}, {numeral:"XL", value: 40},
    {numeral:"X", value: 10}, {numeral:"IX", value: 9},
    {numeral:"V", value: 5}, {numeral:"IV", value: 4},
    {numeral:"I", value: 1}
];

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