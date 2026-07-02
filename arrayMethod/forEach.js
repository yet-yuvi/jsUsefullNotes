const products = ['log book', 'pen', 'mouse', 'phone', 'lighter', 'laptop'];

function showItem(item, index) {
  console.log(`Item number ${index + 1} = ${item}`);
}

products.forEach(showItem);
