// 🔮 Problem:
// Promises ka syntax kabhi kabhi confusing lagta hai — .then().then().catch() 😵‍💫

// 👩 Tum chahte ho code ho:

// Easy to read

// Ekdum sequential (line by line)

// Samajhne mein story jaise smooth

// Toh... JavaScript ne diya: async aur await ✨

function orderPizza(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("pizza aa gya");
        },2000);
    });
}

async function eatDinner(){
    console.log("pizza order kiya");

    let pizza =await orderPizza();//wait until pizza comes
    console.log(pizza);//pizza aa gya
    console.log("pizza khana shuru");
}
eatDinner();

// 🔑 TRICK TO REMEMBER:
// 🎤 Chant This:

// Async ka matlab: Yeh function kuch wait karega
// Await ka matlab: Ab yeh line ruk jaayegi jab tak kaam pura na ho jaaye
// Promise milega → Wait karo → Phir aage badho
// Syntax clear hai → Code clean hai → Life set hai 😎


// 🎓 Ek Line Mein:
// 🔁 Async/await = Promise-based code ko asaani se line-by-line likhne ka tareeka


// ✅ BONUS: Agar promise fail ho gaya toh try/catch use karo:

// async function eatDinner() {
//   try {
//     let pizza = await orderPizza();
//     console.log(pizza);
//   } catch (error) {
//     console.log("Pizza nahi aaya 😢", error);
//   }
// }