// https: //www.freecodecamp.com/challenges/map-the-debris

function orbitalPeriod(arr) {
    var GM = 398600.4418,
        earthRadius = 6367.4447;

    return arr.map(function(element) {
        var a = element.avgAlt + earthRadius,
            period = Math.round(2 * Math.PI * (Math.sqrt(Math.pow(a, 3) / GM)));

        return {
            name: element.name,
            "orbitalPeriod": period
        };
    });
}

orbitalPeriod([{
    name: "sputnik",
    avgAlt: 35873.5553
}]);
