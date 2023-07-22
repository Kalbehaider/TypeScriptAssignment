// Ex 1
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var personName = "Eric";
console.log("Hello ".concat(personName, ", would you like to learn some Python today?"));
// Ex 2
var personName1 = "Jhon";
console.log("Lowercase ".concat(personName1.toLowerCase()));
console.log("Uppercase ".concat(personName1.toUpperCase()));
console.log("Titlecase ".concat(personName1.toLocaleUpperCase()));
// Ex 3
var author = "Floyd Money Mayweather";
var qoute = "To be the best you have to work overtime";
console.log("".concat(author, " once said,\"").concat(qoute, "\""));
// Ex 4
var famous_perosn = "Andrew Tate";
var message = "".concat(famous_perosn, " once said,\"Cost is the enemy of the poor man, so the poor try to save money. Time is the enemy of the rich man, so the rich try to save time.");
console.log(message);
// Ex 5
var personsName = "    Mayweather    ";
console.log(personsName);
var strippedName = personsName.trim();
console.log(strippedName);
// Ex 6
console.log(7 + 1); //aditTion
console.log(9 - 1); //subsTraction
console.log(8 * 1); //multiPlication
console.log(16 / 2); //diviSion
//  Ex 7
var favoriteNumber = 6;
console.log("My favorite number is:".concat(favoriteNumber));
// Ex 8
// Storing Person's name in the string and then printing it to console.
var personNameEx = "Eric";
console.log("Hello ".concat(personName, ", would you like to learn some Python today?"));
// Storing my favorite number in 'number' type and then printing it to console.
var favoriteNumberEx = 6;
console.log("My favorite number is:".concat(favoriteNumber));
// Ex 9
var friendNames = ["Aitzaz", "Nabi", "Sibat"];
for (var _i = 0, friendNames_1 = friendNames; _i < friendNames_1.length; _i++) {
    var nameF = friendNames_1[_i];
    console.log(nameF);
}
//  Ex 10
var friendNames1 = ["Aitzaz", "Nabi", "Sibat"];
for (var _a = 0, friendNames_2 = friendNames; _a < friendNames_2.length; _a++) {
    var nameF = friendNames_2[_a];
    console.log("Asslam-o-Alikum ".concat(nameF, " How are you doing today."));
}
//  Ex 11
var favoriteTransport = ["Bike", "Car"];
for (var _b = 0, favoriteTransport_1 = favoriteTransport; _b < favoriteTransport_1.length; _b++) {
    var transportation = favoriteTransport_1[_b];
    console.log("I would like to own a Honda ".concat(transportation));
}
//  Ex 12
var guestList = ["Andrew Tate", "Elon Musk", "Floyd Mayweather"];
for (var _c = 0, guestList_1 = guestList; _c < guestList_1.length; _c++) {
    var invited = guestList_1[_c];
    console.log("".concat(invited, ", You are invited to dinner. Please Join us."));
}
// Ex 13
var guestList1 = ["Andrew Tate", "Elon Musk", "Floyd Mayweather"];
console.log("Unfotunately, ".concat(guestList1[1], " cant make to dinner."));
guestList1[1] = "Cristiano Ronaldo";
for (var _d = 0, guestList1_1 = guestList1; _d < guestList1_1.length; _d++) {
    var invited1 = guestList1_1[_d];
    console.log("".concat(invited1, ", You are invited to dinner. Please Join us."));
}
// Ex 14
var moreGuest = [
    "Andrew Tate",
    "Cristiano Ronaldo",
    "Floyd Mayweather",
];
console.log("I am happy to inform you all that I have a bigger table and I am Inviting more guest");
moreGuest.unshift("Khabib Nurmagomedov");
moreGuest.splice(2, 0, "Islam Makhachev");
moreGuest.push("lionel Messi 10");
for (var _e = 0, moreGuest_1 = moreGuest; _e < moreGuest_1.length; _e++) {
    var finalGuest = moreGuest_1[_e];
    console.log("".concat(finalGuest, ", You are invited to dinner. Please Join us."));
}
// Ex 15
var shrinkGuest = [
    "Khabib Nurmagomedov",
    "Andrew Tate",
    "Islam Makhachev",
    "Cristiano Ronaldo",
    "Floyd Mayweather",
    "lionel Messi 10",
];
console.log("Oh no the table will not arrive in time.");
console.log("I apologize ".concat(shrinkGuest.pop(), "! Dinner is canceled"));
console.log("I apologize ".concat(shrinkGuest.pop(), "! Dinner is canceled"));
console.log("I apologize ".concat(shrinkGuest.pop(), "! Dinner is canceled"));
console.log("I apologize ".concat(shrinkGuest.pop(), "! Dinner is canceled"));
for (var _f = 0, shrinkGuest_1 = shrinkGuest; _f < shrinkGuest_1.length; _f++) {
    var remaining = shrinkGuest_1[_f];
    console.log("".concat(remaining, ", The dinner is still on. Please Join us."));
}
shrinkGuest.pop();
shrinkGuest.pop();
console.log("The guest list is now empty,".concat(shrinkGuest));
// Ex 16
var favoritePlaces = [
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
var alphabeticalOrder = __spreadArray([], favoritePlaces, true).sort();
console.log(alphabeticalOrder);
// Orignal Order is still Orignal
console.log("Orignal order after sorting: ");
console.log(favoritePlaces);
// Reversed Alphabetical Order
console.log("Reversed Alphabetical Order: ");
var reverseAlphabeticalOrder = __spreadArray([], favoritePlaces.sort(function (a, b) { return b.localeCompare(a); }), true);
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
favoritePlaces.sort(function (a, b) { return b.localeCompare(a); });
console.log("Reversed Alphabetical Order: ");
console.log(favoritePlaces);
//
//
// Ex 17
// T1
var car = "Mercedes";
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
var string1 = "apple";
var string2 = "orange";
console.log("Are string1 and string2 equal? I predict False.");
console.log(string1 === string2);
console.log("Are string1 and string2 not equal? I predict True.");
console.log(string1 !== string2);
console.log("Is strign1 equal to apple? I predict True.");
console.log(string1 === "apple");
console.log("Is string2 is not equal to 'orange'? I predict False.");
console.log(string2 !== "orange");
// Test using Lowercase Funcction
var string3 = "typescript";
var string4 = "JavaScript";
console.log("Is string3 to lowercased is equal to 'typescript'? I predict True.");
console.log(string3.toLowerCase() === "typescript");
console.log("Is string4 to lowercased is not equal to 'javascript'? I predict False.");
console.log(string4.toLowerCase() !== "javascript");
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var number1 = 5;
var number2 = 10;
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
var condition1 = true;
var condition2 = false;
console.log("Is condition1 true and condition2 false? I predict False");
console.log(condition1 && condition2);
console.log("Is condition1 true or condition2 false? I predict False");
console.log(condition1 || condition2);
// Test whether an item is in a array
var fruits = ["apple", "banana", "orange"];
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
var alien_color1 = "green";
if (alien_color1 === "green") {
    console.log("Congragulations! The player just earned 5 points.");
}
// Ex 20
var alien_color2 = "green";
if (alien_color2 === "green") {
    console.log("Congragulations! The player just earned 5 points.");
}
else {
    console.log("Congragulations! The player just earned 10 points.");
}
// Ex 21
var alien_color3 = "green";
if (alien_color3 === "green") {
    console.log("Congragulations! The player just earned 5 points.");
}
else if (alien_color3 === "yellow") {
    console.log("Congragulations! The player just earned 10 points.");
}
else if (alien_color3 === "red") {
    console.log("Congragulations! The player just earned 15 points.");
}
// Ex 22
var age = 30;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult");
}
else {
    console.log("The person is elder");
}
// Ex 23
var favorite_fruits = ["banana", "mango", "strawberry"];
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
var usernames = [
    "Admin",
    "Batman",
    "Tate Brother",
    "Cristiano Ronaldo",
    "Elon Musk",
];
for (var _g = 0, usernames_1 = usernames; _g < usernames_1.length; _g++) {
    var username = usernames_1[_g];
    if (username === "admin") {
        console.log("Hello, admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again"));
    }
}
// Ex 25
var usernames1 = [
    "Admin",
    "Batman",
    "Tate Brother",
    "Cristiano Ronaldo",
    "Elon Musk",
];
if (usernames1.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _h = 0, usernames1_1 = usernames1; _h < usernames1_1.length; _h++) {
        var username1 = usernames1_1[_h];
        if (username1 === "admin") {
            console.log("Hello, admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username1, ", thank you for logging in again"));
        }
    }
}
//  Remove all of the usernames from your array
usernames1 = [];
//
//
// Ex 26
var current_user = [
    "Admin",
    "Batman",
    "Tate Brother",
    "Cristiano Ronaldo",
    "Elon Musk",
];
var new_users = [
    "Tate Brothers",
    "Jeff Bezos",
    " Bill Gates",
    "Warren Buffet",
    "Larry Page",
];
for (var _j = 0, new_users_1 = new_users; _j < new_users_1.length; _j++) {
    var newUser = new_users_1[_j];
    // Converting both to lowwercase
    var lowercaseNewUsers = newUser.toLowerCase();
    var LowercaseCurrentUsers = current_user.map(function (username) {
        return username.toLowerCase();
    });
    if (LowercaseCurrentUsers.indexOf(lowercaseNewUsers) !== -1) {
        console.log("The username \"".concat(newUser, "\" is not available. please enter a new username."));
    }
    else {
        console.log("The username \"".concat(newUser, "\" is available."));
    }
}
//
//
// Ex 27
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _k = 0, numbers_1 = numbers; _k < numbers_1.length; _k++) {
    var number = numbers_1[_k];
    var ordinalEnding = void 0;
    if (number === 1) {
        ordinalEnding = "st";
    }
    else if (number === 2) {
        ordinalEnding = "nd";
    }
    else if (number === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log("".concat(number).concat(ordinalEnding));
}
//  Ex 28
var favoritePizza = ["Pepperoni", "Margherita", "Supreme"];
// Printing the names of each pizza
for (var _l = 0, favoritePizza_1 = favoritePizza; _l < favoritePizza_1.length; _l++) {
    var pizza = favoritePizza_1[_l];
    console.log(pizza);
}
console.log(); // line for spacing
// Printing Sentence
for (var _m = 0, favoritePizza_2 = favoritePizza; _m < favoritePizza_2.length; _m++) {
    var pizza = favoritePizza_2[_m];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log(); // line for spacing
// Expressing Love for Pizza
console.log("\"Anyone who says that money cannot buy happiness has clearly never spent their money on pizza.\"");
//
//
// Ex 29
var animals = ["dog", "cat", "rabbit"];
// Printing each animal name
for (var _o = 0, animals_1 = animals; _o < animals_1.length; _o++) {
    var animal = animals_1[_o];
    console.log(animal);
}
console.log(); // line for spacing
// Printing statement about each animal
for (var _p = 0, animals_2 = animals; _p < animals_2.length; _p++) {
    var animal = animals_2[_p];
    console.log("A ".concat(animal, " would make a great pet."));
}
console.log(); // line for spacing
// Printing a statement about what these animals have in common
console.log("Any of these animals would make a great pet");
//
//
// Ex 30
function make_shirt(size, message) {
    console.log("You have ordered a ".concat(size, "-sized shirt with the message: \"").concat(message, "\""));
}
make_shirt("large", "I love TypeScript");
// Ex 31
function makeShirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Shirt size: ".concat(size));
    console.log("Message: ".concat(message));
}
makeShirt("large", "I love TypeScript");
makeShirt("medium", "I love TypeScript");
makeShirt("small", "Hello World");
// Ex 32
function describe_city(city, country) {
    if (country === void 0) { country = "Unknown"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("Karachi", "Pakistan");
describe_city("New York", "USA");
describe_city("Tokyo"); //The paramete is not provided so it will use the default value "Unknown"
// Ex 33
function city_country(city1, country1) {
    return "".concat(city1, ",").concat(country1);
}
// Calling the function with different city-country pair
var pair1 = city_country("Lahore", "Pakistan");
var pair2 = city_country("Tokyo", "Japan");
var pair3 = city_country("New York", "USA");
console.log(pair1);
console.log(pair2);
console.log(pair3);
//
//
// Ex 34
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// Creating three albums
var album1 = make_album("Justin Bieber", "Purpose");
var album2 = make_album("The Weekend", "Starboy", 18);
var album3 = make_album("Drake", "Popstar", 1);
// Printing Albums
console.log(album1);
console.log(album2);
console.log(album3);
//
//
// Ex 35
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magiciansArray = [
    "Harry Houdini",
    "David Copperfield",
    "Penn Jillette",
    "Teller",
];
show_magicians(magiciansArray);
// Ex 36
function showMagicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_3 = magicians; _i < magicians_3.length; _i++) {
        var magician = magicians_3[_i];
        greatMagicians.push("The Great ".concat(magician));
    }
    return greatMagicians;
}
var magicians_Array = [
    "Harry Houdini",
    "David Copperfield",
    "Penn Jillette",
    "Teller",
];
var greatMagiciansArray = make_great(magiciansArray);
show_magicians(greatMagiciansArray);
//
//
// Ex 37
function show_magicians1(magicians) {
    for (var _i = 0, magicians_4 = magicians; _i < magicians_4.length; _i++) {
        var magician = magicians_4[_i];
        console.log(magician);
    }
}
function make_great1(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_5 = magicians; _i < magicians_5.length; _i++) {
        var magician = magicians_5[_i];
        greatMagicians.push("the Great ".concat(magician));
    }
    return greatMagicians;
}
var magiciansArray1 = [
    "Harry Houdini",
    "David Copperfield",
    "Penn Jillette",
    "Teller",
];
// Create a copy of the original array using slice()
var copyOfMagiciansArray = magiciansArray.slice();
// Call make_great() with the copy of the array
var greatMagiciansArray1 = make_great(copyOfMagiciansArray);
console.log("Original Magicians:");
show_magicians(magiciansArray);
console.log("Great Magicians:");
show_magicians(greatMagiciansArray);
//
//
// Ex 38
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order Summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich.");
    }
    else {
        console.log("You ordered a sandwich with the following items:");
        for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
            var item = items_1[_a];
            console.log("- ".concat(item));
        }
    }
    console.log("---------------------------------");
}
// Call the function three times with different arguments
makeSandwich("Turkey", "Cheese", "Lettuce", "Tomato");
makeSandwich("Chicken", "Bacon", "Avocado");
makeSandwich("Peanut Butter", "Jelly");
function createCar(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    for (var _a = 0, extras_1 = extras; _a < extras_1.length; _a++) {
        var _b = extras_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
// Call the function with required information and additional properties
var myCar = createCar("Toyota", "Corolla", ["color", "blue"], ["year", 2022], ["sunroof", true]);
console.log(myCar);
