// https://www.freecodecamp.com/challenges/spinal-tap-case

function spinalCase(str) {
    var result = str[0].toLowerCase() + str.slice(1),
        upperCaseRegex = /[A-Z]/,
        separatorsRegex = /[\s\-_]/;

    return result
            .split("")
            .map(function(char, index, self) {
                if (index > 0 && upperCaseRegex.test(char) && !separatorsRegex.test(self[index - 1])) {
                    return " " + char;
                }
                return char;
            })
            .join("")
            .toLowerCase()
            .replace(/[_\s]/g, "-");
}

spinalCase('AllThe-small Things');