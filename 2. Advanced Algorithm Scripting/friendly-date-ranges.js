// https://www.freecodecamp.com/challenges/friendly-date-ranges

var monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ],
    cardinal = {
        1: 'st',
        2: 'nd',
        3: 'rd'
    };

function getCardinalDay(day) {
    if (day > 3) {
        return day + 'th';
    } else {
        return day + cardinal[day];
    }
}

function getMonthName(month) {
    return monthNames[month];
}

function FriendlyDate(date) {
    this.day = getCardinalDay(date.getUTCDate());
    this.month = getMonthName(date.getMonth());
    this.year = date.getFullYear();

    this.getFullDate = function() {
        return this.month + ' ' + this.day + ', ' + this.year;
    }
}

function makeFriendlyDates(arr) {
    var firstDate = new Date(arr[0].split('-')),
        lastDate = new Date(arr[1].split(('-'))),
        currentDate = new Date(Date.now()),
        currentYear = currentDate.getFullYear(),
        rangeInSeconds = (lastDate - firstDate) / 1000,
        years = rangeInSeconds / (60 * 60 * 24 * 365),
        begin, end,
        date1, date2,
        friendlyDates = [];

    begin = new FriendlyDate(firstDate);
    end = new FriendlyDate(lastDate);

    date1 = begin.getFullDate();
    date2 = end.getFullDate();

    if (begin.day === end.day && begin.month === end.month && begin.year === end.year) {
        return [date1];
    }

    if (years < 1) {
        date2 = date2.replace(', ' + end.year, '');

        if (begin.year === currentYear) {
            date1 = date1.replace(', ' + begin.year, '');
        }

        if (begin.month === end.month && begin.year === end.year) {
            date2 = date2.replace(end.month + ' ', '');
            date2 = date2.replace(', ' + end.year, '');
        }
    }

    friendlyDates.push(date1);
    friendlyDates.push(date2);

    return friendlyDates;
}

makeFriendlyDates(['2016-07-01', '2016-07-04']);
