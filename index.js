// Define person object
let person = {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
    hobbies: ["reading", "hiking", "traveling"]
  };
  
  // Display entire object
  console.log(person);
  
  // Add new property using dot notation
  person.location = "New York";
  
  // Update email using square bracket notation
  person["email"] = "johndoe2@example.com";
  
  // Define nested family object
  person.family = {
    mother: { name: "Jane", age: 55 },
    father: { name: "John", age: 60 },
    siblings: [
      { name: "Tom", age: 25 },
      { name: "Sarah", age: 28 }
    ]
  };
  
  // Display entire object with nested family object
  console.log(person);
  
  // Define greet function and assign it as a method of person object
  person.greet = function(name) {
    console.log(`Hello, ${name}! My name is ${this.name}.`);
  };
  
  // Shallow clone of person object
  let personClone = Object.assign({}, person);
  
  // Display original and cloned objects
  console.log(person);
  console.log(personClone);
  
  // Deep clone of person object
  let personClone2 = JSON.parse(JSON.stringify(person));
  
  // Display original and cloned objects
  console.log(person);
  console.log(personClone2);
  
  // Display keys, values, and key-value pairs of person object
  console.log(Object.keys(person));
  console.log(Object.values(person));
  console.log(Object.entries(person));
  