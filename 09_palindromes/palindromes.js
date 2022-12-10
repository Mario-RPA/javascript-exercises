const palindromes = function (word) {
    array = word.toLowerCase().replace(/[\W]/gi, "").split("");
    if (array.join() === array.reverse().join()) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
