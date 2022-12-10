const repeatString = function(text, n) {
    if (n < 0) {
        return "ERROR";
    }
    let concat = "";
    for(let i = 0; i < n; i++) {
        concat += text;
    }
    return concat;
};

// Do not edit below this line
module.exports = repeatString;
