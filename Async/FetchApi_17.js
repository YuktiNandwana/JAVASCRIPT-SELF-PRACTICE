// 🔍 What is Fetch API?
// 💬 Socho tum internet se kuch data laana chahti ho — jaise:

// Weather info

// YouTube videos

// Insta post comments

// JSON file

// Server response

// 📡 JavaScript me iske liye hota hai:
// 👉 fetch() — ek tool jo kisi bhi web address (URL) se data laata hai.

// 🎯 Real Life Analogy
// Socho tumne zomato pe order kiya 🍕

// Tumne address diya (URL)

// Zomato (fetch) jaake order lekar aaya

// Tumne kha liya (data use kiya)

// ✅ Syntax
// js
// Copy
// Edit
// fetch("https://api.example.com/data")
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);  // yahan tumhe data milta hai
//   })
//   .catch(error => {
//     console.log("Error aaya 🧨", error);
//   });
// 📖 Line by Line Story
// js
// Copy
// Edit
// fetch("https://api.example.com/data")
// 👉 Yeh request bhej raha hai internet pe — "Mujhe data chahiye is URL se"

// js
// Copy
// Edit
// .then(response => response.json())
// 👉 Server ne reply bheja — lekin raw form mein.
// json() us raw reply ko readable data (JSON) mein convert karta hai.

// js
// Copy
// Edit
// .then(data => {
//   console.log(data);
// })
// 👉 Ab tumhe asli data mil gaya — tum use use kar sakti ho (print, show, etc.)

// js
// Copy
// Edit
// .catch(error => {
//   console.log("Error aaya 🧨", error);
// })
// 👉 Agar koi dikkat hui (net off, galat URL) toh error handle hota hai.

// 📦 Simple Example (Free API):
// js
// Copy
// Edit
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res => res.json())
//   .then(data => {
//     console.log("Users:", data);
//   })
//   .catch(err => {
//     console.log("Error:", err);
//   });
// 🤖 Async/Await Version (same thing, cleaner):
// js
// Copy
// Edit
// async function getUsers() {
//   try {
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await res.json();
//     console.log("Users:", data);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// getUsers();
// 🔑 TRICK to REMEMBER:
// 🎤 Chant This:

// Fetch URL pe jaata hai,
// Response se data laata hai,
// JSON bana ke dikhata hai,
// Catch error mein gussa dikhata hai 😤

// ⚡ Recap Flow Chart:
// 🎯 fetch() → server se data → response.json() → use the data → catch errors