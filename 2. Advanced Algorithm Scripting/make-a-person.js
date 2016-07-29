// https://www.freecodecamp.com/challenges/make-a-person

var Person = function(firstAndLast) {
    var firstName = firstAndLast.split(' ')[0],
        lastName = firstAndLast.split(' ')[1];

    this.getFirstName = function() {
        return firstName;
    };

    this.getLastName = function() {
        return lastName;
    };

    this.getFullName = function() {
        return firstName + ' ' + lastName;
    };

    this.setFirstName = function(first) {
        firstName = first;
    };

    this.setLastName = function(last) {
        lastName = last;
    };

    this.setFullName = function(firstAndLast) {
        var names = firstAndLast.split(' ');
        firstName = names[0];
        lastName = names[1];
    };
};

var bob = new Person('Bob Ross');
bob.getFullName();
