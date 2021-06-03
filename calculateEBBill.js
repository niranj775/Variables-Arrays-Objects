function calculateEBBill(consumptionPerHour, amtPerUnit, noOfDays) {
  let perDay = consumptionPerHour * 24;
  let perMonth = perDay * noOfDays;
  return (perMonth / 1000) * amtPerUnit;
}

console.log(calculateEBBill("100", "10", "30"));
