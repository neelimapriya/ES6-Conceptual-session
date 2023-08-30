const person= { name: 'neelima', age: 24, address: 'noakhali' };

// const name =person.name;

const {age, ...rest}=person;
console.log(rest)  //{ name: 'neelima', address: 'noakhali' }