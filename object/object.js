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

const person2 = person1;

person1.firstName = 'Hasan';
person1.lastName = 'Kamrul';
person1.address.postCode = '1200';

console.log(person1.fullName(), person1.address.postCode); // Output: Hasan Kamrul 1200
console.log(person2.fullName(), person2.address.postCode); // Output: Hasan Kamrul 1200

const person3 = { ...person1 };

person1.firstName = 'Jubayar';
person1.lastName = 'Ahamad';
person1.address.postCode = '1201';

console.log(person1.fullName(), person1.address.postCode); // Output: Jubayar Ahamad 1201
console.log(person3.fullName(), person3.address.postCode); // Output: Hasan Kamrul 1201

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

const person4 = structuredClone(person);

person.firstName = 'Johan';
person.lastName = 'Ahamad';
person.address.postCode = '1202';

console.log(person.firstName, person.address.postCode); // Output: Johan 1202
console.log(person4.firstName, person4.address.postCode); // Output: Jubayar 1212
