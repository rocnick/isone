// (C) 2020 Nick Snyder

var isOne = function() { };

isOne.prototype = {
    check: function(num) {
        let strNum = (num + '').toUpperCase;

        return strNum === 'ONE' || strNum === 'UNO' || num === 1 || parseInt(num) === 1;
    }
}

module.exports = new isOne();