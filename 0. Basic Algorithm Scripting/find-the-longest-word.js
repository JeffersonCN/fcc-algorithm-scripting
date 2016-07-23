function findLongestWord(str) {
  // split the string into an array of words separated by space
  var words = str.split(" ");
  
  // creates an array containing the size of each word in words
  var sizes = words.map(function (word) {
    return word.length;
  });
  
  // return the max value of the sizes array
  return Math.max.apply(null, sizes);
}

findLongestWord("The quick brown fox jumped over the lazy dog");