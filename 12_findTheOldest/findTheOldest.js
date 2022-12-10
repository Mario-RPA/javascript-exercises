const findTheOldest = function(...person) {
    return oldestPerson = person.reduce(
        (oldest, currentPerson) => {
            if((currentPerson.yearOfDeath-currentPerson.yearOfBirth)
            > (oldest.yearOfDeath-oldest.yearOfBirth)) {
                return oldest = currentPerson;
            }
        });
};

findTheOldest({
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1900,
    yearOfDeath: 2011,
  });
// Do not edit below this line
module.exports = findTheOldest;
