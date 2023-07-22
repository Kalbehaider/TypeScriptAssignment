// Ex 1

const personName: string = "Eric";
console.log(`Hello ${personName}, would you like to learn some Python today?`);

// Ex 2

const personName1: string = "Jhon";
console.log(`Lowercase ${personName1.toLowerCase()}`);
console.log(`Uppercase ${personName1.toUpperCase()}`);
console.log(`Titlecase ${personName1.toLocaleUpperCase()}`);

// Ex 3

const author: string = "Floyd Money Mayweather";
const qoute: string = "To be the best you have to work overtime";
console.log(`${author} once said,"${qoute}"`);

// Ex 4

const famous_perosn: string = "Andrew Tate";
const message: string = `${famous_perosn} once said,"Cost is the enemy of the poor man, so the poor try to save money. Time is the enemy of the rich man, so the rich try to save time.`;
console.log(message);

// Ex 5

const personsName: string = "    Mayweather    ";
console.log(personsName);

const strippedName: string = personsName.trim();
console.log(strippedName);

// Ex 6

console.log(7 + 1); //aditTion
console.log(9 - 1); //subsTraction
console.log(8 * 1); //multiPlication
console.log(16 / 2); //diviSion

//  Ex 7

const favoriteNumber: number = 6;
console.log(`My favorite number is:${favoriteNumber}`);

// Ex 8

// Storing Person's name in the string and then printing it to console.
const personNameEx: string = "Eric";
console.log(`Hello ${personName}, would you like to learn some Python today?`);

// Storing my favorite number in 'number' type and then printing it to console.
const favoriteNumberEx: number = 6;
console.log(`My favorite number is:${favoriteNumber}`);

// Ex 9

const friendNames: string[] = ["Aitzaz", "Nabi", "Sibat"];

for (const nameF of friendNames) {
  console.log(nameF);
}

//  Ex 10

const friendNames1: string[] = ["Aitzaz", "Nabi", "Sibat"];

for (const nameF of friendNames) {
  console.log(`Asslam-o-Alikum ${nameF} How are you doing today.`);
}

//  Ex 11

const favoriteTransport: string[] = ["Bike", "Car"];
for (const transportation of favoriteTransport) {
  console.log(`I would like to own a Honda ${transportation}`);
}

//  Ex 12

const guestList: string[] = ["Andrew Tate", "Elon Musk", "Floyd Mayweather"];
for (const invited of guestList) {
  console.log(`${invited}, You are invited to dinner. Please Join us.`);
}

// Ex 13
const guestList1: string[] = ["Andrew Tate", "Elon Musk", "Floyd Mayweather"];
console.log(`Unfotunately, ${guestList1[1]} cant make to dinner.`);

guestList1[1] = "Cristiano Ronaldo";

for (const invited1 of guestList1) {
  console.log(`${invited1}, You are invited to dinner. Please Join us.`);
}

// Ex 14

const moreGuest: string[] = [
  "Andrew Tate",
  "Cristiano Ronaldo",
  "Floyd Mayweather",
];
console.log(
  `I am happy to inform you all that I have a bigger table and I am Inviting more guest`
);

moreGuest.unshift("Khabib Nurmagomedov");
moreGuest.splice(2, 0, "Islam Makhachev");
moreGuest.push("lionel Messi 10");

for (const finalGuest of moreGuest) {
  console.log(`${finalGuest}, You are invited to dinner. Please Join us.`);
}

// Ex 15

const shrinkGuest: string[] = [
  "Khabib Nurmagomedov",
  "Andrew Tate",
  "Islam Makhachev",
  "Cristiano Ronaldo",
  "Floyd Mayweather",
  "lionel Messi 10",
];

console.log(`Oh no the table will not arrive in time.`);
console.log(`I apologize ${shrinkGuest.pop()}! Dinner is canceled`);
console.log(`I apologize ${shrinkGuest.pop()}! Dinner is canceled`);
console.log(`I apologize ${shrinkGuest.pop()}! Dinner is canceled`);
console.log(`I apologize ${shrinkGuest.pop()}! Dinner is canceled`);

for (const remaining of shrinkGuest) {
  console.log(`${remaining}, The dinner is still on. Please Join us.`);
}

shrinkGuest.pop();
shrinkGuest.pop();
console.log(`The guest list is now empty,${shrinkGuest}`);

// Ex 16

const favoritePlaces: string[] = [
  " New York",
  " Paris",
  " Moscow",
  " Rome",
  " Italy",
];

//Orignal Order
console.log("Orignal Order: ");
console.log(favoritePlaces);

// Alphabetical order

console.log("Alphabetical Order: ");
const alphabeticalOrder = [...favoritePlaces].sort();
console.log(alphabeticalOrder);

// Orignal Order is still Orignal

console.log("Orignal order after sorting: ");
console.log(favoritePlaces);

// Reversed Alphabetical Order

console.log("Reversed Alphabetical Order: ");
const reverseAlphabeticalOrder = [
  ...favoritePlaces.sort((a, b) => b.localeCompare(a)),
];
console.log(reverseAlphabeticalOrder);

// Orignal Order is still Orignal

console.log("Orignal order after sorting: ");
console.log(favoritePlaces);

// Revesed Orignl Order

favoritePlaces.reverse();
console.log("Revesed Orignal Order: ");
console.log(favoritePlaces);

// Revesed Orignl Order Again

favoritePlaces.reverse();
console.log("Revesed Orignal Order Again: ");
console.log(favoritePlaces);

// Sort In Alphabetical Order
favoritePlaces.sort();
console.log("Sort In Alphabetical Order: ");
console.log(favoritePlaces);

// Reversed Alphabetical Order

favoritePlaces.sort((a, b) => b.localeCompare(a));
console.log("Reversed Alphabetical Order: ");
console.log(favoritePlaces);

//

//

// Ex 17

// T1
let car = "Mercedes";
console.log("Is car == 'Mercedes'? I predict True");
console.log(car == "Mercedes");

// T2

console.log("Is car == 'honda'? I predict False.");
console.log(car == "honda");

// T3

console.log("Is car == 'mercedes'? I predict False.");
console.log(car == "mercedes");

// T4

console.log("Is car an empty string? I predict False.");
console.log(car == "");

// T 5

console.log("is car truthy? I predict True.");
console.log(!!car);

// T 6

console.log("Is car falsy? I predict False");
console.log(!car);

// T 7

console.log("Is car !== 'honda'? I predict True");
console.log(car !== "Honda");

// T 8

console.log("Is car === 'Mercedes'? I predict True");
console.log(car === "Mercedes");

// T 9

console.log("Is car.length > 7? I predict True");
console.log(car.length > 7);

// T 10

console.log("Is car.length <= 7? I predict False");
console.log(car.length <= 7);

//

//

// Ex 18

// Test using Equality and Inequality with strings

let string1: string = "apple";
let string2: string = "orange";

console.log("Are string1 and string2 equal? I predict False.");
console.log(string1 === string2);

console.log("Are string1 and string2 not equal? I predict True.");
console.log(string1 !== string2);

console.log("Is strign1 equal to apple? I predict True.");
console.log(string1 === "apple");

console.log("Is string2 is not equal to 'orange'? I predict False.");
console.log(string2 !== "orange");

// Test using Lowercase Funcction

let string3: string = "typescript";
let string4: string = "JavaScript";

console.log(
  "Is string3 to lowercased is equal to 'typescript'? I predict True."
);
console.log(string3.toLowerCase() === "typescript");

console.log(
  "Is string4 to lowercased is not equal to 'javascript'? I predict False."
);

console.log(string4.toLowerCase() !== "javascript");

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let number1: number = 5;
let number2: number = 10;

console.log("Is number1 is equal 5? I predict True.");
console.log(number1 === 5);

console.log("Is number1 is not qual to 5? I predict False");
console.log(number1 !== 5);

console.log("Is number1 is greater than number2? I predict False");
console.log(number1 > number2);

console.log("Is number1 is less than number2? I predict True");
console.log(number1 < number2);

console.log("Is number1 is greater than or equal to 5? I predict True");
console.log(number1 >= 5);

console.log("Is number2 less than or equal to 10? I predict True");
console.log(number2 <= 10);

// Tests using "and" and "or" operators

let condition1: boolean = true;
let condition2: boolean = false;

console.log("Is condition1 true and condition2 false? I predict False");
console.log(condition1 && condition2);

console.log("Is condition1 true or condition2 false? I predict False");
console.log(condition1 || condition2);

// Test whether an item is in a array

let fruits: string[] = ["apple", "banana", "orange"];

console.log("Is 'apple' in the fruits array? I predict True.");
console.log(fruits.indexOf("apple") !== -1);

console.log("Is 'grape' in the fruits array? I pedict False");
console.log(fruits.indexOf("grape") !== -1);

// Test whether an item is not in a array
console.log("Is 'banana' in not the fruits array? I predict False.");
console.log(fruits.indexOf("banana") === -1);

console.log("Is 'mango' in not the fruits array? I predict True.");
console.log(fruits.indexOf("mango") === -1);

//

//

// Ex 19

let alien_color1: string = "green";

if (alien_color1 === "green") {
  console.log("Congragulations! The player just earned 5 points.");
}

// Ex 20

let alien_color2: string = "green";

if (alien_color2 === "green") {
  console.log("Congragulations! The player just earned 5 points.");
} else {
  console.log("Congragulations! The player just earned 10 points.");
}

// Ex 21

let alien_color3: string = "green";

if (alien_color3 === "green") {
  console.log("Congragulations! The player just earned 5 points.");
} else if (alien_color3 === "yellow") {
  console.log("Congragulations! The player just earned 10 points.");
} else if (alien_color3 === "red") {
  console.log("Congragulations! The player just earned 15 points.");
}

// Ex 22

let age: number = 30;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
  console.log("The person is a toddler");
} else if (age >= 4 && age < 13) {
  console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
  console.log("The person is a teenager");
} else if (age >= 20 && age < 65) {
  console.log("The person is an adult");
} else {
  console.log("The person is elder");
}

// Ex 23

let favorite_fruits: string[] = ["banana", "mango", "strawberry"];

if (favorite_fruits.indexOf("banana") !== -1) {
  console.log("You really like bananas!");
}

if (favorite_fruits.indexOf("apple") !== -1) {
  console.log("You really like apples!");
}

if (favorite_fruits.indexOf("mango") !== -1) {
  console.log("You really like mangos!");
}

if (favorite_fruits.indexOf("strawberry") !== -1) {
  console.log("You really like straberries!");
}

if (favorite_fruits.indexOf("orange") !== -1) {
  console.log("You really like oranges!");
}

// Ex 24

let usernames: string[] = [
  "Admin",
  "Batman",
  "Tate Brother",
  "Cristiano Ronaldo",
  "Elon Musk",
];

for (const username of usernames) {
  if (username === "admin") {
    console.log("Hello, admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for logging in again`);
  }
}

// Ex 25

let usernames1: string[] = [
  "Admin",
  "Batman",
  "Tate Brother",
  "Cristiano Ronaldo",
  "Elon Musk",
];

if (usernames1.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let username1 of usernames1) {
    if (username1 === "admin") {
      console.log("Hello, admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username1}, thank you for logging in again`);
    }
  }
}

//  Remove all of the usernames from your array

usernames1 = [];

//

//

// Ex 26

let current_user: string[] = [
  "Admin",
  "Batman",
  "Tate Brother",
  "Cristiano Ronaldo",
  "Elon Musk",
];

let new_users: string[] = [
  "Tate Brothers",
  "Jeff Bezos",
  " Bill Gates",
  "Warren Buffet",
  "Larry Page",
];

for (const newUser of new_users) {
  // Converting both to lowwercase
  let lowercaseNewUsers = newUser.toLowerCase();
  let LowercaseCurrentUsers = current_user.map((username) =>
    username.toLowerCase()
  );

  if (LowercaseCurrentUsers.indexOf(lowercaseNewUsers) !== -1) {
    console.log(
      `The username "${newUser}" is not available. please enter a new username.`
    );
  } else {
    console.log(`The username "${newUser}" is available.`);
  }
}

//

//

// Ex 27

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
  let ordinalEnding: string;

  if (number === 1) {
    ordinalEnding = "st";
  } else if (number === 2) {
    ordinalEnding = "nd";
  } else if (number === 3) {
    ordinalEnding = "rd";
  } else {
    ordinalEnding = "th";
  }
  console.log(`${number}${ordinalEnding}`);
}

//  Ex 28

let favoritePizza: string[] = ["Pepperoni", "Margherita", "Supreme"];

// Printing the names of each pizza
for (const pizza of favoritePizza) {
  console.log(pizza);
}

console.log(); // line for spacing

// Printing Sentence
for (const pizza of favoritePizza) {
  console.log(`I like ${pizza} pizza.`);
}

console.log(); // line for spacing

// Expressing Love for Pizza
console.log(
  `"Anyone who says that money cannot buy happiness has clearly never spent their money on pizza."`
);

//

//

// Ex 29

let animals: string[] = ["dog", "cat", "rabbit"];

// Printing each animal name
for (let animal of animals) {
  console.log(animal);
}

console.log(); // line for spacing

// Printing statement about each animal
for (let animal of animals) {
  console.log(`A ${animal} would make a great pet.`);
}

console.log(); // line for spacing

// Printing a statement about what these animals have in common

console.log("Any of these animals would make a great pet");

//

//

// Ex 30

function make_shirt(size: string, message: string): void {
  console.log(
    `You have ordered a ${size}-sized shirt with the message: "${message}"`
  );
}

make_shirt("large", "I love TypeScript");

// Ex 31

function makeShirt(
  size: string = "large",
  message: string = "I love TypeScript"
) {
  console.log(`Shirt size: ${size}`);
  console.log(`Message: ${message}`);
}
makeShirt("large", "I love TypeScript");
makeShirt("medium", "I love TypeScript");
makeShirt("small", "Hello World");

// Ex 32

function describe_city(city: string, country: string = "Unknown") {
  console.log(`${city} is in ${country}`);
}

describe_city("Karachi", "Pakistan");
describe_city("New York", "USA");
describe_city("Tokyo"); //The paramete is not provided so it will use the default value "Unknown"

// Ex 33

function city_country(city1: string, country1: string): string {
  return `${city1},${country1}`;
}

// Calling the function with different city-country pair

const pair1 = city_country("Lahore", "Pakistan");
const pair2 = city_country("Tokyo", "Japan");
const pair3 = city_country("New York", "USA");

console.log(pair1);
console.log(pair2);
console.log(pair3);

//

//

// Ex 34

function make_album(
  artist: string,
  title: string,
  tracks?: number
): { artist: string; title: string; tracks?: number } {
  const album: { artist: string; title: string; tracks?: number } = {
    artist: artist,
    title: title,
  };

  if (tracks) {
    album.tracks = tracks;
  }

  return album;
}

// Creating three albums

const album1 = make_album("Justin Bieber", "Purpose");
const album2 = make_album("The Weekend", "Starboy", 18);
const album3 = make_album("Drake", "Popstar", 1);

// Printing Albums
console.log(album1);
console.log(album2);
console.log(album3);

//
//

// Ex 35

function show_magicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}
const magiciansArray: string[] = [
  "Harry Houdini",
  "David Copperfield",
  "Penn Jillette",
  "Teller",
];
show_magicians(magiciansArray);

// Ex 36

function showMagicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

function make_great(magicians: string[]): string[] {
  let greatMagicians: string[] = [];
  for (let magician of magicians) {
    greatMagicians.push(`The Great ${magician}`);
  }
  return greatMagicians;
}

const magicians_Array: string[] = [
  "Harry Houdini",
  "David Copperfield",
  "Penn Jillette",
  "Teller",
];
const greatMagiciansArray: string[] = make_great(magiciansArray);

show_magicians(greatMagiciansArray);

//
//

// Ex 37

function show_magicians1(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

function make_great1(magicians: string[]): string[] {
  let greatMagicians: string[] = [];
  for (let magician of magicians) {
    greatMagicians.push(`the Great ${magician}`);
  }
  return greatMagicians;
}

const magiciansArray1: string[] = [
  "Harry Houdini",
  "David Copperfield",
  "Penn Jillette",
  "Teller",
];

// Create a copy of the original array using slice()
const copyOfMagiciansArray: string[] = magiciansArray.slice();

// Call make_great() with the copy of the array
const greatMagiciansArray1: string[] = make_great(copyOfMagiciansArray);

console.log("Original Magicians:");
show_magicians(magiciansArray);

console.log("Great Magicians:");
show_magicians(greatMagiciansArray);

//
//

// Ex 38

function makeSandwich(...items: string[]): void {
  console.log("Sandwich Order Summary:");
  if (items.length === 0) {
    console.log("You ordered an empty sandwich.");
  } else {
    console.log("You ordered a sandwich with the following items:");
    for (let item of items) {
      console.log(`- ${item}`);
    }
  }
  console.log("---------------------------------");
}

// Call the function three times with different arguments
makeSandwich("Turkey", "Cheese", "Lettuce", "Tomato");
makeSandwich("Chicken", "Bacon", "Avocado");
makeSandwich("Peanut Butter", "Jelly");

//
//

// Ex 39

interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any;
}

function createCar(
  manufacturer: string,
  model: string,
  ...extras: [string, any][]
): Car {
  const car: Car = {
    manufacturer,
    model,
  };

  for (const [key, value] of extras) {
    car[key] = value;
  }

  return car;
}

// Call the function with required information and additional properties
const myCar = createCar(
  "Toyota",
  "Corolla",
  ["color", "blue"],
  ["year", 2022],
  ["sunroof", true]
);

console.log(myCar);
