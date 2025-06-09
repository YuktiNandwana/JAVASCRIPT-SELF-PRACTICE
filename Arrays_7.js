// let vegetables=["potato","onion","tomato","carrot","cabbage"];
//  console.log(vegetables[2]);
// console.log(vegetables[0]);


                                          //Array Methods**********************

//    1] .push() – Adds one or more elements to the end of an array and returns the new length of the array.
// let fruits=["apple","banana","orange"];
// console.log(fruits.push("grape"));//output: 4
// console.log(fruits);

//     2] .pop() – Removes the last element from an array and returns that element.
//  let fruits=["apple","banana","orange"];
// console.log(fruits.pop("orange"));
// console.log(fruits);

//      3]  .shift() - Remove the first element from the array

// let fruits=["apple","banana","orange"];
// console.log(fruits.shift("apple"));
// console.log(fruits);

// 4]  .unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.

// let fruits=["apple","banana","orange"];
// console.log(fruits.unshift("grape"));
// console.log(fruits);

//5]  .forEach() - Loop through an array and execute a function for each item

// let fruits = ["apple", "banana", "orange"];
// fruits.forEach(function(fruit) {
//     console.log(fruit);
//   });

  
  // Multi-dimensional Arrays

//   let matrix=[[1,2,3],[4,5,6],[7,8,9]];
//   console.log(matrix[0][1]);
//   console.log(matrix[2][2]);


                                       //Array-Practice*******************

    // Scenario 1: You have a list of your friends names, and you want to print each one and find the index of a specific friend.

    // let friends=[   "John", "Sarah", "Mike", "Emma", "David"];
    // 1. Print each friend’s name using a loop.
    // friends.forEach(function(friend) {
    //     console.log(friend);
    // });

    // 2. Find the index of "Emma" in the array.
    // console.log(friends.indexOf("Emma"));

                                // Array Project Idea*****************

    // Task: Build a shopping list app. The user can add and remove items, and view the entire list.

//     let shoppingList=["tablet","laptop","phone","headphones"];
//     console.log(shoppingList.push("charger"));//output: 5
//     console.log(shoppingList);
//     console.log(shoppingList.pop("tablet"));// removes the LAST element 
//     console.log(shoppingList);
    
// // Now remove "tablet"
// let index = shoppingList.indexOf("tablet");
// if (index !== -1) {
//   shoppingList.splice(index, 1);
// }
// console.log(shoppingList)


//example
//"Go to index 1, remove 1 items, insert English."

let books = ["Math", "Science", "History"];
books.splice(1, 1, "English");
console.log(books);


//revise array

// Topic	Method / Concept	Example Output
// Create Array	let arr = [1, 2, 3]	[1, 2, 3]
// Access Value	arr[0]	1 (1st element)
// Update Value	arr[1] = 5	[1, 5, 3]
// Add at End	arr.push(4)	[1, 2, 3, 4]
// Remove from End	arr.pop()	[1, 2]
// Find Index	arr.indexOf(2)	1
// Remove Specific	splice(index, 1)	Removes specific value
// Insert	splice(index, 0, value)	Adds item at that index

//push pop se last elemt ,ei add, remove hota hai specific krn hai toh use .splice