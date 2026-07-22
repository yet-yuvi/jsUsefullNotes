function asynchronousDivide(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject(new Error("Can't divide by zero!!!"));
      return;
    }

    console.log('It will divide eventually');

    setTimeout(function () {
      const r = a / b;
      resolve(r);
    }, 3000);
  });
}

asynchronousDivide(10, 2)
  .then((res) => {
    console.log(`Result: ${res}`);
  })
  .catch((err) => {
    console.warn('Failed to divide: ', err.message);
  });