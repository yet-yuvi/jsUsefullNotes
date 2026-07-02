function operation(a, b, operationCallback) {
	const result = operationCallback(a, b);
	return result;
}

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

console.log(operation(7, 3, add));
console.log(operation(7, 3, sub));
console.log(operation(7, 3, mul));
console.log(operation(7, 3, div));

console.log(operation(7, 3, (x, y) => x % y));