                         // 1] String Operations:

// a] find length of String 
//  use .length
// let a="cholepav";
// let b="1008";
// console.log(a.length);
// console.log(b.length);


//b] Accessing individual characters:
let name="vansh chandila";
console.log(name[2]);


                           // 2] String Methods:

// a] .toUpperCase() 
// let person="vansh chandila";
// console.log(person.toUpperCase());

// b] .toLowerCase()
// console.log(person.toLowerCase());

//c] .trim()
// removes extra spaces from start and end of string
// let str="   Hello World!   ";
// console.log(str.trim());


//d] .slice()


//    TRICK
 //.slice(start, end)
// ✅ includes start index
// ❌ excludes end index

// So it gives you characters from start to end-1

// let msg = "JAVASCRIPT IS FUN!";
// console.log(msg.slice(5, 10));//output : cript

//e] .replace(old value,new value)
// let cake="blackforest cake";
// console.log(cake.replace("cake","chocolava"));


// f] .indexOf(searchValue) – Finds the first occurrence of searchValue in the string and returns the index.
// let delhi="delhi is the capital of india";
// console.log(delhi.indexOf("the"));
// console.log(delhi.indexOf("india"));//space  ka bhi count hota hai index 