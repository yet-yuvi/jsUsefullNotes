function checkThis(globalThis) {
  console.log(globalThis === this); // Output: true
  const firstFunctionThis = this;
  function checkThisTwo(firstFunctionThis, globalThis) {
    console.log(firstFunctionThis === this); // Output: true
    console.log(globalThis === this); // Output: true
    console.log(this);
  }
  checkThisTwo(firstFunctionThis, globalThis);
}
checkThis(this);

this.mySecretToken = '12345';

function checkThisV2(globalThis) {
  const firstFunctionThis = this;

  function checkThisTwoV2(firstFunctionThis, globalThis) {
    // Both variables and 'this' can access the exact same property
    console.log(firstFunctionThis.mySecretToken); // Output: "12345"
    console.log(globalThis.mySecretToken); // Output: "12345"
    console.log(this.mySecretToken); // Output: "12345"
  }
  checkThisTwoV2(firstFunctionThis, globalThis);
}
checkThisV2(this);
