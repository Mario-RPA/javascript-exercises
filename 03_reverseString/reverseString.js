const reverseString = function(reverse) {
    let reversed = "";
    reverse = reverse.split("");
    for (let i = reverse.length - 1; i >= 0; i--) {
        reversed += reverse[i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
