// (C) 2016 Nick Snyder

var isOne = function() {
};

isOne.prototype = {
  check: function(num) {
    return num == 1 || parseInt(num) == 1;
  }
}

module.exports = new isOne();
