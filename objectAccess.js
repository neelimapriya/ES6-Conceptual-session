const person= { name: 'Neelima', age: 24, address: 'Noakhali' };

// dot notation , bracket notation

console.log(person.age) //24
console.log(person["age"])  //24

const propertyName="age"
console.log(person[propertyName])  //24



const complexObject = {
    id: 1,
    name: "Main Object",
    info: {
        description: "This is a complex nested object.",
        author: {
            firstName: "John",
            lastName: "Doe"
        }
    },
    data: {
        values: [10, 20, 30],
        settings: {
            isEnabled: true,
            maxItems: 5
        }
    }
};

// name, description, lastName, last element of values, maxItems
console.log("name:",complexObject.name );
console.log("Description:",complexObject.info.description );
console.log("Last name:",complexObject.info.author.lastName );
// console.log("last element of values:",complexObject.data.values[2] );
console.log("last element of values:",complexObject.data.values[complexObject.data.values.length-1]);
console.log(" maxItems:",complexObject.data.settings.maxItems );
