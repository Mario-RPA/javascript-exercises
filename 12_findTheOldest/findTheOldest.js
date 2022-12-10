const findTheOldest = function(person) {
    return person.reduce(
        (oldest, currentPerson) => {
            if(!currentPerson.hasOwnProperty("yearOfDeath")) {
                currentPerson.yearOfDeath = new Date().getFullYear();
            } else if(!oldest.hasOwnProperty("yearOfDeath")) {
                oldest.yearOfDeath = new Date().getFullYear();
            }
            return currentPerson.yearOfDeath-currentPerson.yearOfBirth
            < oldest.yearOfDeath-oldest.yearOfBirth ? oldest : currentPerson            
        });

};

// let oldest = findTheOldest([{
//     name: "Carly",
//     yearOfBirth: 1942,
//     yearOfDeath: 1970,
//     },
//     {
//     name: "Ray",
//     yearOfBirth: 1962,
//     yearOfDeath: 2011,
//     },
//     {
//     name: "Jane",
//     yearOfBirth: 1912,
//     yearOfDeath: 1941,
//     }]);

// // Do not edit below this line
module.exports = findTheOldest;


//Dan's working code
//module.exports = (people) => people.reduce((a, b) => a.yearOfDeath-a.yearOfBirth > b.yearOfDeath-b.yearOfBirth ? a : b)
