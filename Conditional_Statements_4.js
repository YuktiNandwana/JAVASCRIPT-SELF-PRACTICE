                      //CONDITIONAL STATEMENTS IN JAVASCRIPT

// 1] if Statement: Executes a block of code if a specified condition is true.


// let age = 20;
// if (age >= 18) {
//     console.log("You are an adult.");
// }

//2]  else Statement: Executes a block of code if the condition in the if statement is false.


// let age = 16;
// if (age >= 18) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are a minor.");
// }

// 3] else if Statement: Checks multiple conditions.


// let age = 20;
// if (age < 18) {
//     console.log("You are a minor.");
// } else if (age >= 18 && age <= 60) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are a senior.");
// }

// 4] switch Statement: Allows you to test multiple conditions based on the value of a variable.


// let day = 2;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     default:
//         console.log("Other day");
// }


// let girl = yukti;
// switch(girl){
//     case 1:
//         console.log("richa");
//         break;
//         case2
// }

let fruits = "mango";
switch(fruits){

    case "apple":
        console.log("apple is red");
        break;

        case "banana":
            console.log("bananna is yellow");
            break;

            case "mango":
                console.log("mango is sour and sweet i like to eat it everyday in different forrm");
                break;

                default:
                    console.log("unknown fruits");
}