                           // 🔹 Data Types in JavaScript
// 🟢 Primitive Data Types:

// 1] String - "Hello" or 'Hi'
// 2] Number - 123, 45.67
// 3] Boolean - true / false
// 4] Null - No value (intentional empty)
// 5]  Undefined - Not assigned any value
// 6] Symbol - Unique values
// 7] BigInt - Large integers


// 🟢 Non-Primitive Data Types:

// 1] Object - Collection of key-value pairs
// 2] Array - Ordered list of values
// 3] Function - Block of code that can be called
// 4] Date - Represents date and time
// 5] RegExp - Regular expressions for pattern matching
// 6] Map - Collection of key-value pairs (similar to objects but with more features)
// 7] Set - Collection of unique values (no duplicates)
// 8] WeakMap - Similar to Map but with weak references to keys

                          //EXAMPLE:

//   let city ="Delhi"; // String
//   let age=34; // Number
//   let isStudent=false;// Boolean
//   let salary=null;// Null
//   let address;// Undefined

              //   🟣 typeof operator:
//   The typeof operator is used to check the data type of a variable in JavaScript. It returns a string indicating the type of the unevaluated operand.
             //   To check the data type:

// console.log(typeof isStudent);// Boolean
// console.log(typeof age);// Number
// console.log(typeof address);// Undefined


// let person={name: "shyam",age:20,city:"delhi"}
// console.log(person.age);


let x=10;
let y=x;
x=30;//x ko update kra
y=x;//manually update kra
console.log(y);//but y toh update nhi kiya .