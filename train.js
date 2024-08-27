/* D-TASK: 

Shunday class tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud! */

const moment = require("moment");

class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
    this.time = moment().format("HH:mm");
  }

  qoldiq() {
    console.log(
      `Hozir ${this.time} da ${this.non} ta non, ${this.lagmon} ta lag'mon va ${this.cola} ta cola mavjud.`
    );
  }

  sotish(item, amount) {
    if (this[item] >= amount) {
      this[item] -= amount;
      console.log(
        `Hozir ${this.time} da ${this.non} ta non, ${this.lagmon} ta lag'mon va ${this.cola} ta cola mavjud. `
      );
    } else {
      console.log(
        `Hozir ${this.time} da ${amount} ta ${item} sotish imkoni yoq, yetarli emas.`
      );
    }
  }

  qabul(item, amount) {
    this[item] += amount;
    console.log(`Hozir ${this.time} da ${amount} ta ${item} qabul qilindi.`);
  }
}

const shop = new Shop(4, 5, 2);
shop.qoldiq();
shop.sotish("non", 3);
shop.qabul("cola", 4);
shop.qoldiq();

// C-TASK:

/*
Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;
*/

// let checkContent = (mitgroup, groupmit) => {
//   // for (let mit of mitgroup) { // for of
//   //   console.log(mit);
//   // }
//   const str1 = [...mitgroup];
//   const str2 = [...groupmit];
//   const letter1 = str1.sort().join("");
//   console.log(letter1);
//   const letter2 = str2.sort().join("");
//   console.log(letter2);
//   return letter1 === letter2 ? true : false;
//   // if (letter1 === letter2) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }
// };

// const result = checkContent("mitgroup", "gmtiprou");
// console.log("C-TASK:", result);

// B-TASK:
/*
Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
*/

// function countDigits(firstTest) {
//   let count = 0;
//   const letter = [...firstTest]; // spread ...
//   const letter1 = firstTest.split(""); // split('')
//   console.log("1", letter);
//   console.log("2", letter1);
//   letter.map((l) => {
//     if (!isNaN(l)) {
//       count++;
//     }
//   });
//   return count;
// }

// const result = countDigits("ad2a54y79wet0sfgb9");
// console.log("B-TASK:", result);

// // A-TASK
// // case 1

// function countLetter(e, word) {
//   let count = 0;
//   const char = word.split("");
//   char.map((c) => {
//     if (c === e) {
//       count++;
//     }
//   });
//   return count;
// }

// const result = countLetter("e", "engineeringeeee");
// console.log("A-Task:", result);

// // case 2

// function countLetter1(e, word) {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === e) {
//       count++;
//     }
//   }
//   return count;
// }

// const result1 = countLetter1("e", "engineer");
// console.log("A-Task:", result1);

// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba boling", // 0-20
//   "togri boshliq tanlang va koproq xato qiling", //20-30
//   "uzingizga ishlashingizni boshlang", //30-40
//   "siz kuchli bolgan narsalarni qiling", //40-50
//   "yoshlarga investitsiya qiling", //50-60
//   "endi dam oling, foydasi yoq", //60
// ];

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000); //callback(null, list[5]);
//   }
// }

// console.log("passed here 0");
// maslahatBering(77, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   console.log("javob:", data);
// });
// console.log("passed here 1");

// // Asynchronous

// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba boling", // 0-20
//   "togri boshliq tanlang va koproq xato qiling", //20-30
//   "uzingizga ishlashingizni boshlang", //30-40
//   "siz kuchli bolgan narsalarni qiling", //40-50
//   "yoshlarga investitsiya qiling", //50-60
//   "endi dam oling, foydasi yoq", //60
// ];

// async function maslahatBering(a, callback) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
//   }
// }

// // then/catch

// console.log("passed here 0");
// maslahatBering(25)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");

// // asyn/await

// async function run() {
//   let javob = await maslahatBering(25);
//   console.log(javob);
//   javob = await maslahatBering(70);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();

// setInterval;

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a < 20 && a <= 30) callback(null, list[1]);
//   else if (a < 30 && a <= 40) callback(null, list[2]);
//   else if (a < 40 && a <= 50) callback(null, list[3]);
//   else if (a < 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }

// console.log("passed here 0");
// maslahatBering(25).then((data) => {
//   if (err) console.log("error", err);
//   else {
//     console.log(data);
//   }
// });
// console.log("passed here 1");
