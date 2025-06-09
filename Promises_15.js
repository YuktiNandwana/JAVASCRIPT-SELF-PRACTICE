// ⏳ 2. Promises – "Main pakka kaam karke dunga... success ya fail"
// 📖 Definition:
// Promise JavaScript ka ek object hai jo future mein complete hone wale kaam ko represent karta hai — ya toh successful (resolve), ya fail (reject).

// 🧒 Real-Life Example:
// Tum bolte ho:

// "Main promise karta hoon kal 5 baje tak homework complete kar dunga."

// ✅ Complete ho gaya → "Promise resolved"
// ❌ Nahi ho paya → "Promise rejected"

let homework = new Promise (function(resolve, reject){
let completed = false;

if(completed){
    resolve ("homewok done");
}else{
    reject("nhi hua homework");
}
});

homework.then(function(result){
    console.log(result);//agr success hua
}).catch(function(error){
    console.log(error);//agr fail hua
});

// 🧠 Yaad Rakhne Ka Tarika:
// Promise = Future ka vada, jo ya toh pura hota hai (then) ya tootta hai (catch)

               // 🎓 TRICK to Remember:
               
// 📦 Promise = Ek dabba jo future ka result batata hai (success ya fail)

// ✨ 2 cheezein hoti hain usme:

// resolve() → jab kaam ho jaaye (Success Path)

// reject() → jab kaam fail ho jaaye (Error Path)

// 🙋 Callback functions:

// then() → success ke liye

// catch() → fail hone par

// 🧠 Yaad Rakhne Wali Line:
// Promise bolta hai:
// "Main ya toh apna waada nibhaunga (resolve), ya toot jaaunga (reject) — lekin kuch na kuch toh zaroor hoga!"