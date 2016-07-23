function palindrome(str) {
    // Good luck!
    var newStr = str.replace(/[^a-zA-Z\d:]/g, '').toLowerCase(),
        rev = "";
    for (var i = newStr.length - 1; i >= 0; i--) {
        rev += newStr[i];
    }
    
    return rev == newStr;
}

palindrome("eye");