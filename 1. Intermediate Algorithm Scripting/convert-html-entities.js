// https://www.freecodecamp.com/challenges/convert-html-entities

function convertHTML(str) {
  var result = str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
    
  return result;
}

convertHTML("Dolce & Gabbana");
