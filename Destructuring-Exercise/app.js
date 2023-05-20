// Object Destructuring 1
// What does the following code return/print?
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // ?
console.log(yearNeptuneDiscovered); // ?
// Console.log (numPlanets) prints 8
// Console.log (yearNeptunrDiscovered) printes 1846


//Object Destructuring 2
// What does the following code return/print?
let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // ?
  // It prints yearMarsDiscovered:
//yearMarsDiscovered :1659
//yearNeptuneDiscovered: 1846


//Object Destructuring 3
// What does the following code return/print?
function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) //prints 'Your name is Alejandro and you like purple'
  getUserData({firstName: "Melissa"}) // prints 'Your name is Melissa and you like green'
  getUserData({}) // prints 'Your name is undefined and you like green'

  //Array Destructuring 1
  //What does the following code return/print?

  let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // prints 'Maya'
console.log(second); // prinys 'Marisa'
console.log(third); // prints 'Chi'


//Array Destructuring 2
  //What does the following code return/print?
  let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // Prints 'Raindrops on roses'
  console.log(whiskers); // prints 'Whiskers on kittens'
  console.log(aFewOfMyFavoriteThings); // prints ["Bright copper kettles","warm woolen mittens","Brown paper packages tied up with strings"]


  //Array Destructuring 3
  //What does the following code return/print?
  let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // prints [10,30,20]

//ES5 Assigning Variables to Object Properties
var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  var a = obj.numbers.a;
  var b = obj.numbers.b;

  // Es2015 Version
let obj = {
    Number:{
        a:1,
        b:2
    }
    };
    let {a,b}=obj.Number

   // ES5 Array Swap
   var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

// ES2015 version
[arr[0], arr[2]]=[arr[1], arr[0]]


// Write a function called raceResults which accepts a single array argument. 
//It should return an object with the keys first, second, third, and rest.
raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})