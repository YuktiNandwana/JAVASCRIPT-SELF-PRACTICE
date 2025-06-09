                                    // METHODS

// A method is simply a function that is a property of an object. 
// In JavaScript, functions are objects, and when they are assigned as properties of an object, they are called methods.



                                 //syntax

// const obj={
//     methodNmae:function(){
//         console.log("hello fom method");
//     }
// };

// obj.methodNmae(); //calling the method


                       // 🔍 Difference Between Function and Method:
                       
// Function: A regular block of reusable code that can be called independently.

// Method: A function that is attached to an object as a property.

// EXAMPLE1:

// const car={
//     make:"TESLA",
//     model:"MODEL-10",
//     displayInfo:function(){
//         console.log(`${this.make}${this.model}`);
//     }
// };
// car.displayInfo();


//EXAMPLE2

// const yukti={
//     make:"God ,mummy, papa",
//     age:"20 ",
//    year:" 2year",
// displayInfo:function(){
//     console.log(`${this.make}${this.age}${this.year}`)
// }
// };
// yukti.displayInfo();

// ✅ What it means:
// `${}` → This is a template literal. It helps you insert variables inside a string without using + signs.

// this.make → Refers to the make property of the current object.

// this.model → Refers to the model property of the same object.

// In this example, displayInfo is a method because it is a function defined inside the car object.

// 🧩 Key Points to Understand:
// this in Methods: Inside a method, this refers to the object that the method belongs to. In the example above, this.make refers to the make property of the car object.

// Methods in Arrays/Objects: JavaScript objects and arrays often have built-in methods like .push(), .pop(), .map(), etc.

// **********************************************************************************************************

                                // 🎯 Common Built-In Methods in JavaScript:
// String Methods:

//1 .toUpperCase(): Converts a string to uppercase.

// let str="yuktinandwana"
// console.log(str.toUpperCase());


// 2 .toLowerCase(): Converts a string to lowercase.


// let str="YUKTINANDWANA";
// console.log(str.toLowerCase());

                                      // Array Methods:

//1  .push(): Adds an element to the end of an array.


// let arr = [1, 2, 3];
// arr.push(4);
// console.log(arr); // [1, 2, 3, 4]

//2 .pop(): Remove an element from the end of the array

// let arr=[1,2,5,7,3];
// arr.pop();
// console.log(arr);


// 3 .map(): Creates a new array with the results of calling a provided function on every element in the calling array.


// let arr = [1, 2, 3];
// let newDoubledArr = arr.map(x => x * 2);
// console.log(newDoubledArr); // [2, 4, 6]

                                  // Object Methods:

// 4 .hasOwnProperty(): Checks if an object has a specific property.

// let person = { name: "John", age: 30 };
// console.log(person.hasOwnProperty("name")); // true
// console.log(person.hasOwnProperty("address")); // false

                                           // Math Methods:

// 1 Math.random(): Returns a random number between 0 and 1.

// console.log(Math.random()); // Random number between 0 and 1

// 2 Math.max()  : Returns the largest of zero or more numbers.

// console.log(Math.max(1, 2, 3)); // 3




                                    // 🛠 Practice Task:

// Q1 Create an object called book with properties title, author, and price.
//  Write a method inside this object that displays the book information (title, author, and price).

// const book={
//     title:"bloody pahalgam",
//     author:"yukti nandwana",
//     price:"400",
//     displayInfo:function(){
//    console.log(`${this.title}${this.author}${this.price}`);
//     }
// };
// book.displayInfo();

// 1 Create an array with numbers. Write a method that multiplies each number by 10 using the map() method.

// let arr =[1,9,3,4,5];
// let doubled=arr.map(function(num){
//     return num * 2;
// });

// console.log(doubled);

// 2 Write a method inside an object that calculates the area of a rectangle (length * width) when given the length and width as parameters.

const rectangle={
    calculateArea: function(length,width){
return length*width;
}
};
console.log(rectangle.calculateArea(20*3));

// 🔍 Explanation:
// rectangle is an object.

// calculateArea is a method (a function inside an object).

// It takes two parameters: length and width.

// It returns the area by multiplying length * width.

