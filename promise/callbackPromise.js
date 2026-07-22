function asynchronousDivide(a, b, callback) {
  if (b === 0) {
    const err = new Error("Can't divide by zero!!!");
    callback(err, null);
    return;
  }
  console.log('It will divide eventually');
  setTimeout(function () {
    const r = a / b;
    callback(null, r);
  }, 3000);
}

asynchronousDivide(10, 0, (err, res) => {
  if (err) {
    console.warn('Failed to divide: ', err.message);
    return;
  }
  console.log(`Result: ${res}`);
});
