var a=20;  //old way
let b=40; //modern way
b=100;
const c=70;  //fixed  ; cannot be change 

console.log(c,b,a);



                                // ✅ Valid Variable Names:
// These follow all the rules.

// let myName = "Rahul";       // starts with letter
// let _score = 90;            // starts with underscore (_)
// let $price = 100;           // starts with dollar sign ($)
// let user123 = "Aman";       // can contain numbers after first character


                                // ❌ Invalid Variable Names:

// let 123user = "Aman";   // ❌ Starts with a number - NOT allowed
// let my-name = "Raj";    // ❌ Hyphens are not allowed
// let let = "value";      // ❌ 'let' is a reserved keyword


                                       // 🔁 Case Sensitivity:

// JavaScript is case-sensitive, so 'myName' and 'MyName' are different variables.
let myName = "Ravi";
let MyName = "Amit";

console.log(myName);    // Output: Ravi
console.log(MyName);    // Output: Amit

// ✅ Both are different variables because JS is case-sensitive

