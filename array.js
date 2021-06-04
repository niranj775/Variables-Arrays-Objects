// ! Declare an empty array;
let emptyArray = [];
console.log(emptyArray);
//! Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
let foods = [
  "Macaroni and Cheese",
  "Pizza",
  "Bacon and Eggs",
  "Cheese Fries",
  "Pasta",
  "Hamburger",
  "Soup",
  "Salad",
  "Bread",
  "Rice",
  "Eggs",
  "Dosa",
  "Poori",
  "Chapathi",
  "Idly",
  "Sambar rice",
  "Curd rice",
  "Tomato rice",
  "Lemon Rice",
  "Tamarind rice",
];
//! How can you find your fifth favorite food?
console.log(foods[5 - 1]);
//! Find the length of your foods array
console.log(foods.length);

//! Starting from the existing friends variable below, change the element that is currently 'Mari' to 'Munnabai'.

let friends = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran",
];

friends[0] = "Munnabai";

function dataHandling(input) {
  for (var i = 0; i < input.length; i++) {
    console.log(input[i]);
  }
}
dataHandling(friends);

//! Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.

function dataHandling1(input) {
  for (var i = 0; i < 3; i++) {
    console.log(input[i]);
  }
}
dataHandling1(friends);

//! Find the person is ur friend or not.
function dataHandling2(input, name) {
  isFriend = false;
  for (var i = 0; i < input.length; i++) {
    if (input[i] == name) isFriend = true;
  }
  return isFriend;
}
let found = dataHandling2(friends, "Jeff");
console.log(found);

//!

var friends1 = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran",
];

var friends2 = ["Gabbar", "Rajinikanth", "Mass", "Spiderman", "Jeff", "ET"];

var friends3 = friends1.concat(friends2);
console.log(friends3);
console.log(friends2);
console.log(friends1);
