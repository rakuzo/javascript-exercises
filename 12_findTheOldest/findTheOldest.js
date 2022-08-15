const findTheOldest = function(items) {
    const currentDate = new Date().getFullYear();
    const oldest = items.sort((a, b) => {
        if (!('yearOfDeath' in a)) {
            aLive = currentDate - a.yearOfBirth;
            bLive = b.yearOfDeath - b.yearOfBirth;
        } else if (!('yearOfDeath' in b)) {
            aLive = a.yearOfDeath - a.yearOfBirth;
            bLive = currentDate - b.yearOfBirth;
        } else {
            aLive = a.yearOfDeath - a.yearOfBirth;
            bLive = b.yearOfDeath - b.yearOfBirth;
        }
        return (aLive > bLive) ? -1 : 1;
    });
    return oldest[0]; //return the first object
};

// Do not edit below this line
module.exports = findTheOldest;
