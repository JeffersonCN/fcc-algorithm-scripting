// https://www.freecodecamp.com/challenges/validate-us-telephone-numbers

var re = /^(1?\ ?(([0-9]{3})|(\([0-9]{3})\))([ -]?)([0-9]{3})([ -]?)([0-9]{4}))$/i;

function telephoneCheck(str) {
  // Good luck!
  return re.test(str);
}