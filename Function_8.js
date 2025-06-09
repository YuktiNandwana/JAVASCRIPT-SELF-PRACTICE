    // FUNCTIONS are object in jaavscript

//1 SYNTAX
// function functionName() {
    // code to run
//   }
  
  //EXAMPLE

//   function sayHello() {
//     console.log("Hello there! 👋");
//   }
//but output nhi aayega


//2️⃣ How to Call a Function

// sayHello();

// 3️⃣ Functions with Parameters (Inputs)

// function sayHi(name){
//     console.log("hello,how are you"+name);
// }
// sayHi("papa");
// sayHi("mummy");

//name = input, jo user deta hai (called parameter)


// 4️⃣ Functions that Return Values

// function add (a,b){
//     return a+b;
// }
// let sum=add(100,100);
// console.log("SUM IS=" +sum);

                                       // 🎁 Practice Tasks:


// 1️⃣ Write a function to multiply 2 numbers?

// function multiply(number1,number2){
//     return number1*number2;
// }
// let product=multiply(10,5);
// console.log("product of two number =" +product);


// 2️⃣ Write a function to check if a number is even or odd
// function toCheck(number) {
//     if (number % 2 == 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }
// let check = toCheck(9);
// console.log(check);

//short trick
// function toCheck(number) {
//     return (number % 2 == 0) ? "Even" : "Odd";
// }

// function banao jo square karta hai kisi number ka.????????

// function square(number){
//     return (number*number);
// }
// let sq=square(9)
// console.log(sq);

// Ek function banao jo full name return kare (first name + last name).????

// function fullName(FN,LN){
//     return(FN+LN);
// }
 
// let name=fullName("yukti","nandwana");
// console.log(name);


// Celsius to Fahrenheit ??????????????????

// function celsiusToFahrenheit(celsius) {
//   return ((celsius * 9/5) + 32);
// }

// Now we call the function and print the result
// let fahrenheit = celsiusToFahrenheit(30);
// console.log(fahrenheit);

// Function to Multiply Two Numbers

// function multiply(num1,num2){
//   return (num1*num2);
// }
// let product=multiply("21","3");
// console.log(product);

// 2️⃣ Function to Check if a Number is Even or Odd

// function toCheck (num){
//   if(num%2==0){
//     return("even");
//   }else{
//    return("odd");
//   }
// }
// let checking =toCheck("35");
// console.log(checking);


// 3️⃣ Function to greet two people with "Good Morning"

// function toGreet (name1,name2){
//  return "good Morning" +name1 +name2;
// }
// let names=toGreet("yukti", "himanshi");
// console.log(names);

// Q4 Function to greet 1 people with "Good Morning"
// function GREET(NAME){
//   return "GOOD MORNING"+" " + NAME;
// }
// let NAME1=GREET("kearl");
// console.log(NAME1);

function sayHi(){
  console.log("HI")
}
sayHi();//call kroge tbhi output show hoga