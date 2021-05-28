function circle(r) {
  let circumference = 2 * (22 / 7) * r,
    diameter = 2 * r,
    area = (22 / 7) * r * r;
  let arr = [circumference.toFixed(2), diameter, area.toFixed(2)];
  return arr;
}

console.log(circle(4));
