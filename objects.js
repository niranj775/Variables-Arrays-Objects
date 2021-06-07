// !What the output
myobject = {
  1: "one",
  11: 1,
  name: "arun",
};
console.log(myobject[11]);
console.log(myobject.name);

// ! Add a new key value pair to myobject
// key : ten
// value : ten

myobject.ten = "ten";
console.log(myobject);

// How would you represent the following data using a combination of object literals and arrays?
// (You can describe a strategy without typing or writing out the whole thing.)
/*
Guvi, Geek, 6, IIT-M RP,Chennai.
Amazon, Inc, 31, SP Infocity, Chennai.
Google, Alphabet, 34 Amphitheater Parkway, MountainView.
Tesla, Inc , 32, 333 Santana Row,San Jose.
*/

let userInput = [
  "Guvi, Geek, 6, IIT-M RP, Chennai.",
  "Amazon, Inc, 31, SP Infocity, Chennai.",
  "Google, Alphabet, 34, Amphitheater Parkway, MountainView.",
  "Tesla, Inc, 32, Santana Row, San Jose.",
];
let inp = [];
for (const e of userInput) {
  inp.push(e.split(","));
}

let company = {};
for (let e of inp) {
  company[e[0] + e[1]] = { Address: e[2] + "," + e[3] + "," + e[4] };
}
console.log(company);
