const sumAll = function(n, m) {
    let result = 0;
    let range = [];
    if (n < 0 || m < 0 || typeof(m) !== "number" || typeof(n) !== "number") {
        return "ERROR"
    } else if (n > m) {
        range = [m, n];
    } else {
        range = [n, m];
    }
    for (let i = range[0]; i<=range[1]; i++) {
        result += i;
    }

    return result;
};

sumAll(1,4);

// Do not edit below this line
module.exports = sumAll;
