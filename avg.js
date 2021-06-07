/*
Find the average in the array below.
Make sure you add only the numbers and do avg.
*/

const friendsInfo = [
  6,
  12,
  "Mari",
  1,
  true,
  "Munnabai",
  "200",
  "CaptianAmerica",
  8,
  10,
];

let numbersArray = friendsInfo.filter((ele) => {
  if (typeof ele == "number") return ele;
});
console.log(numbersArray.reduce((a, e) => a + e));
