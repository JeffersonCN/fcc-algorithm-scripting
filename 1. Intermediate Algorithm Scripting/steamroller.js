// https://www.freecodecamp.com/challenges/steamroller

function getElements(givenArr) {
      var result = [];

      givenArr.forEach(function(element){
        if (Array.isArray(element)) {
          result = result.concat(getElements(element));
        } else result.push(element);
      });
      
      return result;
    }

function steamrollArray(arr) {
    // I'm a steamroller, baby
    return getElements(arr);
}

steamrollArray([1, [2],[3, [[4]]]]);