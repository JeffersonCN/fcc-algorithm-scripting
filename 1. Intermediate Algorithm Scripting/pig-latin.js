// https://www.freecodecamp.com/challenges/pig-latin

function translatePigLatin(str) {
    var re = (/^[^aeiou]$/i);

    var i = 1;
    var conCluster = "";

    if (re.test(str[0])) {
        conCluster = str[0];
        while (re.test(str[i])) {
            conCluster += str[i];
            i++;
        }
        str = str.slice(conCluster.length) + conCluster + "ay";
    } else {
        str += "way";
    }

    return str;
}

translatePigLatin("consonant");
