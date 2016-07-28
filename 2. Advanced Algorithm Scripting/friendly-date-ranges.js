// https://www.freecodecamp.com/challenges/friendly-date-ranges
var monthNames = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
},
cardinal = {
    1: 'st',
    2: 'nd',
    3: 'rd'
};

function getCardinalDay(day) {
    if (day > 3) {
        return  day + 'th';
    } else {
        return day + cardinal[day];
    }
}

function getMonthName(month) {
    return monthNames[month];
}

function makeFriendlyDates(arr) {
    var firstDate = new Date(arr[0].split('-')),
        lastDate = new Date(arr[1].split(('-'))),
        currentDate = new Date(Date.now()),
        currentYear = currentDate.getFullYear(),
        rangeInSeconds = Math.round((lastDate - firstDate)/1000),
        years = rangeInSeconds / (60*60*24*365),
        begin,
        end,
        date1,
        date2,
        friendlyDates = [];

    begin = {
        day: getCardinalDay(firstDate.getUTCDate()),
        month: getMonthName(firstDate.getMonth()),
        year: firstDate.getFullYear()
    };

    end = {
        day: getCardinalDay(lastDate.getUTCDate()),
        month: getMonthName(lastDate.getMonth()),
        year: lastDate.getFullYear()
    };

    date1 = begin.month + ' ' + begin.day + ', ' + begin.year;
    date2 = end.month + ' ' + end.day + ', ' + end.year;

    if (years < 1) {
        date2 = date2.replace(', ' + end.year, '');

        if (begin.year === currentYear) {
            date1 = date1.replace(', ' + begin.year, '');
        }
    } else {
        if (begin.month === end.month) {
            date2 = date2.replace(', ' + end.year, '').replace(end.month + ' ');
        }
    }

    friendlyDates.push(date1);
    friendlyDates.push(date2);

    return friendlyDates;
}

makeFriendlyDates(['2016-07-01', '2016-07-04']);
