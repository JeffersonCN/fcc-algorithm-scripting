function repeatStringNumTimes(str, num) {
    var newStr = "";

    if (num > 0) {
        for (var i = 0; i < num; i++) {
            newStr += str;
        }
        
        return newStr;
    }

    return "";
}

repeatStringNumTimes("abc", 3);