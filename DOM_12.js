// ❓ DOM kyu use karte hain?
// Jab hum HTML/CSS likhte hain, woh ek static page hota hai.
// 🔒 User kuch click kare ya likhe — page react nahi karta.

// 🟢 DOM (Document Object Model) JavaScript ko power deta hai:

// ✅ DOM ke uses (Real Benefits):

// Feature	Example
// 🎯 Access HTML elements	Button click par kuch print karna
// ✏️ Change text, color, images	Button dabate hi heading ka color change
// ➕ Add new elements	"Add to Cart" item dynamically add karna
// ❌ Delete/Hide elements	Modal close karna
// 👂 Listen to user actions	Click, typing, scroll, hover, etc.
// 🧠 Real-Life Analogy:
// Socho HTML ek menu card hai restaurant ka.
// JavaScript + DOM ek waiter hai jo:

// Menu padhta hai ✅

// Order change karta hai ✅

// Extra item add karta hai ✅

// User ke response pe react karta hai ✅

// 🛠 Without DOM:
// Page fixed rehta

// Koi interaction possible nahi

// JS kuch bhi change nahi kar paata

// With DOM, JavaScript web page se baat karta hai, sunta hai, aur kaam karta hai! 😄

// ✅ DOM = Bridge between JavaScript and HTML/CSS
// ➡ Isliye DOM bohot important hai for interactive web apps (like Amazon, Flipkart, etc.)

**************************************************************************************************************

// 🧪 HTML + JavaScript Example:
// html
// Copy
// Edit
// <!DOCTYPE html>
// <html>
// <head>
//   <title>DOM Example</title>
// </head>
// <body>

//   <h1 id="myHeading">Mujhe change karo!</h1>
//   <button onclick="changeText()">Click karo!</button>

//   <script>
//     function changeText() {
//       document.getElementById("myHeading").innerText = "Hello Yukti! DOM ne mujhe change kiya 😊";
//     }
//   </script>

// </body>
// </html>
// 🧠 Samjho kya ho raha hai:
// <h1 id="myHeading">... → Ye heading hai jiska text badalna hai.

// <button onclick="changeText()"> → Jab button click hoga, changeText() function chalega.

// document.getElementById(...) → DOM ka function hai jo kisi element ko uske id se dhoondta hai.

// .innerText = ... → Ye us element ka text change kar deta hai.

// Ye live try karna chaho to isse ek .html file me save karo aur browser me kholo.
// Click karte hi heading change ho jaayegi — DOM ke magic se! 🪄

// Kya tum aur DOM ke real-life use cases dekhna chahogi?

*************************************************************************************************************

// 💡 5 Real-Life DOM Use Cases
// 1. 🎨 Theme Change (Light/Dark Mode)
// Tumne dekha hoga — button dabate hi website dark ho jaati hai.

// DOM kya karta hai:
// JavaScript ke through DOM se website ke body ya div ka background-color change hota hai.

// document.body.style.backgroundColor = "black";
// 2. ✍️ Form Validation (Galat Email dikhana)
// Jab tum galat email dalte ho, turant error message aa jaata hai.

// DOM kya karta hai:
// Error message ka element DOM se dhoond ke uska innerText set karta hai.

// document.getElementById("error").innerText = "Please enter a valid email!";
// 3. 📦 Product Add to Cart (Amazon)
// “Add to Cart” dabate hi cart me item dikh jaata hai.

// DOM kya karta hai:
// Naya element (item) HTML me dynamically insert karta hai.

// let item = document.createElement("li");
// item.innerText = "1 x iPhone";
// document.getElementById("cart").appendChild(item);
// 4. 🔍 Search Bar Suggestions (YouTube, Google)
// Tum type karte ho aur suggestions neeche aa jaate hain.

// DOM kya karta hai:
// Input detect karta hai, fir suggestion list DOM me add karta hai.

// document.getElementById("suggestions").innerHTML = `
//   <li>How to learn HTML</li>
//   <li>How to use DOM</li>
// `;
// 5. 📸 Image Gallery (Slide show)
// Left/right arrow dabao, image change hoti hai.

// DOM kya karta hai:
// <img> tag ke src ko JavaScript ke through change karta hai.

// document.getElementById("mainImage").src = "new-image.jpg";
// 💬 Simple Summary:
// DOM tumhari HTML website ko zinda karta hai. JavaScript use control karta hai — jaise remote TV ko.