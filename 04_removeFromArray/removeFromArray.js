const removeFromArray = function(array, ...filter) {
    return array.filter(n => !filter.includes(n));
};

// Do not edit below this line
module.exports = removeFromArray;
