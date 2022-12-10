const getTheTitles = function(books) {
    return [].concat(...books).map(books => books["title"]);
};

// Do not edit below this line
module.exports = getTheTitles;
