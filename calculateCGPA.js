function calculateCGPA(inp) {
  let S = 10,
    A = 09,
    B = 08,
    C = 07,
    D = 06,
    E = 05,
    U = 00,
    toSum;

  for (let i = 0; i < inp.length; i++) {
    let sum = 0;
    for (j = 0; i < inp[i].length; j++) {
      sum = sum + +inp[i][j];
    }
    toSum.push(sum);
  }
  return inp;
}
let results = [
  [S, A, B, A, D, E, S, S, S],
  [S, C, B, A, D, B, S, S, S],
  [S, B, B, A, C, D, S, S, S],
  [S, A, B, A, D, E, S, S, S],
  [S, C, B, A, D, B, S, S, S],
  [B, B, A, C, D, S, S, S],
  [S, A, B, A, D, E, S, S, S],
  [S, C, B, A, D, B, S, S, S],
  [A, S],
];
console.log(calculateCGPA(results));

/*
S - 10
A - 09
B - 08
C - 07
D - 06
E - 05
U - 00
*/
