
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

// Object Method in ES2015 version

const obj = {
    firstName :'Achyut',
    sayHi(){
        return "Hi!!!"
    },
    sayBye(){
        return this.firstName + "Say Bye!!!"
    }
}

// Write a function which generates an animal object. The function should accepts 3 arguments:

const d = createAnimal("dog", "bark", "Woooof!")
d.bark()  
const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
s.bleet() 
function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}