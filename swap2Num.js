function swap2Num(a, b) {
  //Method 1: Using temp
  /*
  let temp = a;
  a = b;
  b = temp;
  */
  //Method 2: using destructuring assignment
  //[a, b] = [b, a];
  //Method 3: addition and subtraction operator
  /*
  a = a + b;
  b = a - b;
  a = a - b;
  */
  //Method 4: XOR operator
  a = a ^ b;
  console.log(a, b);
  b = a ^ b;
  console.log(a, b);
  a = a ^ b;
  console.log(a, b);
}

swap2Num(58, 27);
