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

const foundUser = persons.find((person) => {
  return person.address.postCode === 9320 ? true : false;
});

console.log(foundUser);