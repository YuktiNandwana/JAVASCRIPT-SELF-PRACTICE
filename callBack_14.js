// callBack ek function hota hai jo tab call hota hai
//  jab koi kaam complete ho jaaye.

//  🧒 Real-Life Example:
// Maan lo tum pizza order karte ho aur bolte ho:

// "Bhaiya pizza deliver ho jaaye, toh mujhe phone kar dena."

// ➡️ Tumhara "phone karna" ek callback hai.


// 💻 Code Example:

// function orderPizza(callback){
//     console.log("pizza ban rha hai...");
//     setTimeout(()=>{
//         console.log("PIZZA READY");
//         callback();// pizza ke baad callback call hoga
//     },20000);
// }

// function eatPizza(){
//     console.log("pizza khana shuru");

// }

// orderPizza(eatPizza);

// JavaScript ek “single-threaded” language hai, par usme hoti hai "asynchronous" cheezein — jaise setTimeout, fetch, etc.

// setTimeout kya karta hai?

// 🕓 JavaScript bolta hai:

// “2 second baad yeh kaam karo, par abhi code rukega nahi, agli line chala do.”

// Isliye:

// 1️⃣ Pehle chalta hai:
// console.log("Pizza bana rahe hain...");

// 2️⃣ Fir setTimeout JavaScript ko bolta hai:

// "Yeh kaam memory mein rakh lo, aur 2 second baad wapas bula lena."
// (Ye background mein chala jaata hai — event queue mein.)

// 3️⃣ JavaScript bolta hai:

// “Okay, main aage chalta hoon jab tak 2 second complete nahi hote.”

// ⏰ 2 second ke baad:

// JavaScript wapas aata hai us background se aur chalaata hai:

// console.log("Pizza ready!")

// callback() → eatPizza()

// 🧾 Output console mein jab aata hai:

// 0 sec → Pizza bana rahe hain...
// 2 sec → Pizza ready!
// 2 sec → Pizza khana shuru 🍕

// 👀 Isliye tumhe lagta hai dono saath-saath aaye — par actually dono 2 second ke baad sequentially aaye hain, ek ke baad ek.

// 🎯 Isko yaad rakhne ke liye:

// setTimeout() ke andar jo likha hota hai wo delay ke baad chalta hai, par wo pura block (console.log + callback) ek saath chalta hai jab uska number aata hai queue mein.

// ⏱ Isko “Event Loop” + “Callback Queue” kehte hain — JavaScript wait karta hai, kaam ready hota hai, fir sab sequentially execute hota hai.

// Chaaho toh iska ek animation-style diagram bana ke de sakti hoon jisme dikhaye ki kaise JavaScript ka brain kaam karta hai setTimeout ke saath. Batau banayein?