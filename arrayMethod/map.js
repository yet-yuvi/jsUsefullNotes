// 1. Core Data Set: Array of objects containing nested properties
const persons = [
  {
    name: 'Johan Ahamad',
    age: '05',
    address: {
      city: 'Morelgong',
      postCode: 9320,
    },
  },
  {
    name: 'Jubayar Ahamad',
    age: 35,
    address: {
      city: 'Pirojpur',
      postCode: 8500,
    },
  },
  {
    name: 'Ronaldo JR',
    age: 16,
    address: {
      city: 'Riydh',
      postCode: 12363,
    },
  },
  {
    name: 'Lamin Yamal',
    age: 18,
    address: {
      city: 'Barcelona',
      postCode: '08304',
    },
  },
];

// Printing the original array of objects
console.log(persons);

// EXAMPLE A: Extracting a single property string from objects
let personsNames = persons.map((person) => person.name);
console.log(personsNames);
// Output: [ 'Johan Ahamad', 'Jubayar Ahamad', 'Ronaldo JR', 'Lamin Yamal' ]

// EXAMPLE B: Transforming strings using conditional logic (if/else)
personsNames = persons.map((person) => {
  if (person.name === 'Johan Ahamad') {
    return `${person.name} CEO`;
  }
  return `${person.name} (Employee)`;
});
console.log(personsNames);
// Output: [ 'Johan Ahamad CEO', 'Jubayar Ahamad (Employee)', 'Ronaldo JR (Employee)', 'Lamin Yamal (Employee)' ]

// EXAMPLE C: Accessing nested objects and formatting new strings
let personCity = persons.map((person) => {
  return `${person.name} came from ${person.address.city}`;
});
console.log(personCity);
// Output: [ 'Johan Ahamad came from Morelgong', 'Jubayar Ahamad came from Pirojpur', 'Ronaldo JR came from Riydh', 'Lamin Yamal came from Barcelona' ]
