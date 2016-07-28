// https://www.freecodecamp.com/challenges/exact-change

var coinMap = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
};

function getTotalFunds(cid) {
    var total = cid.reduce(function(prev, curr) {
        return prev + curr[1];
    }, 0);

    return Math.round(total * 100) / 100;
}

function checkCashRegister(price, cash, cid) {
    console.log('--------- FUNÇÃO INICIADA ---------');
    console.log('\tPREÇO: ' + price);
    console.log('\tDINHEIRO: ' + cash);
    var change = [],
        changeVal = cash - price,
        totalFunds = getTotalFunds(cid),
        len = cid.length,
        pos = len - 1;
    console.log('\tTOTAL TROCO: ' + changeVal);
    console.log('\tEM CAIXA: ' + totalFunds);


    if (totalFunds < changeVal) {
        return "Insufficient Funds";
    } else if (totalFunds === changeVal) {
        return "Closed";
    }


    for (var i = pos; i >= 0; i--) {
        console.log('\t////// INICIO MOEDA ///////');
        var coin = cid[i][0],
            fund = cid[i][1],
            val = coinMap[coin],
            coins = 0;
        console.log('\t\tMOEDA: ' + coin + " VALOR: " + val);

        while (changeVal - val >= 0 && fund > 0) {
            coins++;
            fund -= val;
            changeVal -= val;
            changeVal = changeVal.toFixed(2);
        }

        console.log('\t\tQUANTIDADE: ' + coins);
        console.log('\t\tTROCO RESTANTE: ' + changeVal);

        if (coins > 0) {
            change.push([coin, coins * val]);
        }

        if (changeVal === 0) {
            break;
        }
        console.log('\t////// FIM MOEDA ///////');
    }

    if (changeVal > 0) {
        return "Insufficient Funds";
    }

    console.log('\tTROCO EM MOEDAS: ' + change);
    // Here is your change, ma'am.
    return change;
}

checkCashRegister(
    19.50,
    20.00, [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.10],
        ["QUARTER", 4.25],
        ["ONE", 90.00],
        ["FIVE", 55.00],
        ["TEN", 20.00],
        ["TWENTY", 60.00],
        ["ONE HUNDRED", 100.00]
    ]
);
