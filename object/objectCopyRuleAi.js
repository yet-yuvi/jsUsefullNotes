// ============================================================================
// STAGE 1: REFERENCE COPY (Both variables point to the exact same object)
// ============================================================================
const person1 = {
  id: 10051,
  firstName: 'Kamrul',
  lastName: 'Hasan',
  age: 50,
  address: {
    city: 'Dhaka',
    postCode: 1212,
  },
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

// What you did here: You copied the memory reference, not the actual object.
const person2 = person1;

person1.firstName = 'Hasan';
person1.lastName = 'Kamrul';
person1.address.postCode = '1200';

// Result: Changing person1 automatically changes person2 because they are the same object.
console.log(person1.fullName(), person1.address.postCode); // Output: Hasan Kamrul 1200
console.log(person2.fullName(), person2.address.postCode); // Output: Hasan Kamrul 1200

// ============================================================================
// STAGE 2: SHALLOW COPY (Top-level properties are separated, nested objects are shared)
// ============================================================================
// What you did here: You used the spread operator (...) to copy top-level keys.
const person3 = { ...person1 };

person1.firstName = 'Jubayar';
person1.lastName = 'Ahamad';
person1.address.postCode = '1201'; // Modifying the nested object

// Result: Top-level names remain independent ('Hasan Kamrul'),
// but the nested 'postCode' changes in both because 'address' shares the same memory reference.
console.log(person1.fullName(), person1.address.postCode); // Output: Jubayar Ahamad 1201
console.log(person3.fullName(), person3.address.postCode); // Output: Hasan Kamrul 1201

// ============================================================================
// STAGE 3: DEEP COPY (Everything is 100% separated, completely new memory)
// ============================================================================
// What you did here: You created a clean data object WITHOUT functions.
const person = {
  id: 10051,
  firstName: 'Jubayar',
  lastName: 'Ahamad',
  age: 50,
  address: {
    city: 'Dhaka',
    postCode: 1212,
  },
};

// What you did here: You successfully used structuredClone() for a true deep copy.
// Because there are no functions inside 'person', this line works perfectly without crashing!
const person4 = structuredClone(person);

person.firstName = 'Johan';
person.lastName = 'Ahamad';
person.address.postCode = '1202'; // Modifying the deep nested object

// Result: Total separation! Changing 'person' has absolutely ZERO effect on 'person4'.
// Even the deeply nested 'postCode' remains safely protected at its original value (1212).
console.log(person.firstName, person.address.postCode); // Output: Johan 1202
console.log(person4.firstName, person4.address.postCode); // Output: Jubayar 1212
