                                       // 🏹 Arrow Functions in JavaScript

                                       // Arrow functions are shorter way to write functions expressions

                                            //SYNTAX       
                                       
// const sayHello = () => {
//     console.log("Hello! 👋");
//   };
  
//   sayHello(); 

                                         //  🔍 Breakdown:

// const sayHello = → Assigning function to variable
// () => {} → Arrow function syntax


// let purchase = () => {
//     console.log("MAC,TABLET");
// };
// // purchase();

                          // 💡 3️⃣ Shortcut: 1 parameter, 1 line

// let purchase=()=> console.log("MAC,TABLET");
// purchase();

// No parentheses for 1 parameter
// No curly braces {} or return if it's only one line
  
                            //🔄 4️⃣ With Return Value

//     const subtract = (a,b)=>{
//         return a-b;
//     }
//    console.log(subtract(100,80));
//    console.log(subtract(100,30));

//                           ✅ Practice Task — Try This:
// Question:
// Write an arrow function called multiply that takes 2 numbers and returns their product.

let multiply =(num1,num2)=>{
    return num1*num2;
}
console.log(multiply(12,9));

