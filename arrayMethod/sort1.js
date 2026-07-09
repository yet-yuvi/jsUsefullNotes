const a = [-1, -5, 1, 0, 9, 7, 2, -7, 11, 3, 4, -2, 5, 6, 8, -3, 10, -4, -6];

const sortedA = a.sort((x, y) => {
  return x - y;
});

console.log(sortedA);
