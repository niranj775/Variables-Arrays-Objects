function discountOfProduct(actual, sold) {
  return ((actual - sold) / actual) * 100;
}

console.log(discountOfProduct(500, 400));
