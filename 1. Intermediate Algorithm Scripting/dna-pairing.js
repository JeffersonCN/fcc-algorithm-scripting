// https://www.freecodecamp.com/challenges/dna-pairing

function pairElement(str) {
  var pairs = {
    "A":"T",
    "T":"A",
    "C":"G",
    "G":"C"
  };
  
  strArr = str.split("");
  
  var result = [];
  
  strArr.forEach(function (c) {
    result.push([c, pairs[c]]);
  });
  
  return result;
}

pairElement("GCG");