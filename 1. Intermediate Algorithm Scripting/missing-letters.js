// https://www.freecodecamp.com/challenges/missing-letters

function fearNotLetter(str) {
  var currentChar = str[0].charCodeAt();
  
  for (var i = 1; i < str.length; i++) {
    currentChar++;
    if(str[i].charCodeAt() != currentChar) {
      return String.fromCharCode(currentChar);
    }
  }
  
  return;
}

fearNotLetter("abce");