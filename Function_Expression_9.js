                                                //mtlb

//Function Expression mein hum function ko ek variable mein store karte hain — jaise hum kisi value ko store karte hain.

                                                // ✅ Syntax:

// const sayHello=function(){
// console.log("HELLO");
// };
// sayHello();

// Yahan hum const ka use karke sayHello ko declare kar rahe hain — jaise:
// const = fix value
// let = changeable value
// var = old method


                                               // ✅ Practice Time!
// Try these small tasks:

// 1️⃣ Write a function expression that multiplies two numbers.

// let multiply=function(num1,num2){
//     return num1*num2;
// }
// console.log(multiply(12,9));


// ✅ Write a function expression that checks if a number is positive or negative

// let check=function(nums){
// if(nums>0){
//     return "positive";
// }else if(nums<0){
//     return("negative");
// }else(nums==0)
//     return "0";
// }
// console.log(check(0));


// Task 3️⃣: Function Expression — Greet Someone
const Greet = function(name) {
    console.log("Good Morning, " + name + " 🌞");
  };
  
  Greet("Vansh Chandila"); // ✅ Output: Good Morning, Vansh Chandila 🌞
  

//   ✨ Summary:

//   | Function Declaration| Function Expression |
// |-----------------------|----------------------|
// | Traditional, hoisted  | Variable jaisa behave karta |
// | Pehle call kar sakte  | Pehle call nahi kar sakte |
// | function naam() {}    | const naam = function() {} |




// 🧠 Golden Rule:
// 🗣️ Function Expression = Pehle likho, baad mein call karo
// 🗣️ Function Declaration = Kahin bhi likho, pehle bhi call kar sakte ho