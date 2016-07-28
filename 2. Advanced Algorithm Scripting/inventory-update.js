// https://www.freecodecamp.com/challenges/inventory-update

function updateInventory(inventory, delivery) {

    var allItems = inventory.concat(delivery),
        newInventory = [],
        found;

    allItems.forEach(function(item, iteration) {
        found = false;

        newInventory.forEach(function(newInvItem) {
            if (item[1] === newInvItem[1]) {
                newInvItem[0] += item[0];
                found = true;
                return false;
            }
        });

        if (!found) {
            newInventory.push(item);
        }

    });

    return newInventory.sort(function(item1, item2) {
        if (item1[1] < item2[1]) {
            return -1;
        } else {
            return 1;
        }
    });
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
