function aithmeticOperations(n1, n2) {
  let arr = [];
  arr.push(`Add :${+n1 + +n2}`);
  arr.push(`Sub :${+n1 - +n2}`);
  arr.push(`Multi :${+n1 * +n2}`);
  arr.push(`Divis :${+n1 / +n2}`);
  arr.push(`Mod :${+n1 % +n2}`);
  return arr;
}
console.log(aithmeticOperations("10", "3"));
