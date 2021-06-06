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

//! We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.

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

//! 1. Get the first item, the middle item and the last item of the array
console.log(foods[0], foods[foods.length / 2 - 1], foods[foods.length - 1]);
// 2. Add your name to the end of the friends array, and add another name to beginning.

// 3. Add Mr or Ms to the names in the friends array.

// 4. Concat all the names the friends array and return as comma “,” seperated string.

// 5. Find the friends names who has letter ‘a’ and return the list.

// 6. Find the avg length of all the friends names. Get the individual length of the names and do the avg.

// 7. Find the names and return the list starting with letter M.

// 8. Find the name with max characters and return the name.

// 9. Find the name with min characters and return the name.
