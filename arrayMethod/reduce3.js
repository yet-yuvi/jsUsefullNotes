const prices = [10, 12, 15, 20, 25, 30, 35, 38, 40, 45, 50, 55, 60, 65, 100];

const totalPrice = prices.reduce((acc, curr) => {
  if (curr <= 30) {
    return acc + curr;
  }
  const vat = curr * 0.15;
  return acc + curr + vat;
}, 0);

console.log(`${totalPrice}Tk`);
