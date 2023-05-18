
// Same Keys and values in ES2015 version
function createInstructor (firstName, lastName){
    return {
        firstName,
        lastName
    };
}

// Computed Property Names in ES2015 version
let favoriteNumber = 42;
const instructor = {
    firstName: "Achyut",
    [favoriteNumber]:"That is my Favorite!"
}