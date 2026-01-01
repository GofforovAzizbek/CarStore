// 20 talik masalalar
// 1-
// let talabalar = {
//   Anvar: 18,
//   Jamila: 20,
//   Mirza: 19
// };

// // Talabalar sonini topish
// let soni = Object.keys(talabalar).length;

// console.log("Talabalar soni:", soni);

// 2-
// let mahsulotlar = {
//   olma: 3000,
//   nok: 4000,
//   banan: 2000
// };

// // Barcha narxlarni yig‘ish
// let yigindi = Object.values(mahsulotlar).reduce((sum, price) => {
//   return sum + price;
// }, 0);

// console.log("Narxlar yig'indisi:", yigindi);

// 3-
// let jadval = {
//   dushanba: "Matematika",
//   seshanba: "Fizika",
//   chorshanba: "Informatika"
// };

// // Barcha kalitlarni olish
// let kunlar = Object.keys(jadval);

// console.log(kunlar);

// 4-
// let shaxs = {
//   ism: "Sanjar",
//   yosh: 25
// };

// // Obyektni muzlatish
// Object.freeze(shaxs);

// // O‘zgartirishga urinish
// shaxs.ism = "Ali";
// shaxs.yosh = 30;
// shaxs.familiya = "Karimov";

// console.log(shaxs);

// 5-
// let vazifalar = {
//   uy_ishi: true,
//   dastur_yaratish: false,
//   sport: true
// };

// // Barcha qiymatlarni olish
// let values = Object.values(vazifalar);

// // Tugatilgan va tugatilmaganlarni sanash
// let tugatilgan = values.filter(v => v === true).length;
// let tugatilmagan = values.filter(v => v === false).length;

// console.log("Tugatilgan:", tugatilgan);
// console.log("Tugatilmagan:", tugatilmagan);

// 6-
// let mahsulotlar = { olma: 3000, nok: 4000, banan: 2000 };

// // Faqat narxi 3000 dan yuqori mahsulotlarni filtrlash
// let filtered = Object.fromEntries(
//   Object.entries(mahsulotlar).filter(([name, price]) => price > 3000)
// );

// console.log(filtered);

// 7-
// let sinf = { Ahmad: 15, Murod: -3, Javohir: 17 };

// // Faqat manfiy bo'lmagan yoshlarni qoldirish
// let yaroqliSinf = Object.entries(sinf).reduce((acc, [name, age]) => {
//   if (age >= 0) acc[name] = age;
//   return acc;
// }, {});

// console.log(yaroqliSinf);

// 8-
// let bankHisob = { balans: 500000 };

// // pinCode ni faqat o'qiladigan qilib qo'shish
// Object.defineProperty(bankHisob, "pinCode", {
//   value: 1234,
//   writable: false,   // o'zgartirib bo'lmaydi
//   configurable: false, // o'chirib bo'lmaydi
//   enumerable: true   // konsolda ko'rinadi
// });

// console.log("Bank hisob:", bankHisob);
// console.log("PinCode:", bankHisob.pinCode);

// // O'zgartirishga urinib ko'rish
// bankHisob.pinCode = 9999;
// console.log("PinCode o'zgartirishga urinish:", bankHisob.pinCode);

// 9-
// let shaxs = {
//   ism: "Laylo",
//   familiya: "Islomova",
//   toliqIsm() {
//     return this.ism + " " + this.familiya;
//   }
// };

// console.log(shaxs.toliqIsm());

// 10-
// let qiymatlar = [10, 20, 30];

// function sumArray() {
//   return this.reduce((a, b) => a + b, 0);
// }

// // call yordamida this ni qiymatlar massiviga bog'laymiz
// let yigindi = sumArray.call(qiymatlar);

// console.log("Yig'indi:", yigindi);

// 11-
// let mahsulotlar = { olma: 3000, nok: 4000 };

// function getPrice() {
//   return this.olma; // this orqali olma narxini olamiz
// }

// // bind yordamida this ni mahsulotlar obyektiga bog'laymiz
// let boundFn = getPrice.bind(mahsulotlar);

// console.log("Mahsulot narxi:", boundFn());

// 12-
// let narxlar = [500, 1000, 1500];

// function sum(...args) {
//   return args.reduce((a, b) => a + b, 0);
// }

// // apply yordamida array ni argument sifatida uzatamiz
// let yigindi = sum.apply(null, narxlar);

// console.log("Yig'indi:", yigindi);

// 13-
// let savdo = { olma: 100, nok: 150, banan: 80 };

// // foyda() metodini qo'shish
// savdo.foyda = function() {
//   return this.olma + this.nok + this.banan;
// };

// console.log("Foyda:", savdo.foyda());

// 14-
// let sinf = { "o'quvchilar": 25, "oʻqituvchi": 1 };

// // Obyektni muhrlash
// Object.seal(sinf);

// // Mavjud qiymatlarni o'zgartirish mumkin
// sinf["o'quvchilar"] = 30;
// sinf["oʻqituvchi"] = 2;

// // Yangi maydon qo'shishga urinish (ishlamaydi)
// sinf["fan"] = "Matematika";

// console.log(sinf);

// 15-
// let shaxs = {
//   ism: "Olim",
//   yosh: 25,
//   salomlash() {
//     console.log(`Salom, men ${this.ism}man!`);
//   }
// };

// shaxs.salomlash(); // Salom, men Olimman!

// // Misol: boshqa shaxs bilan
// let boshqaShaxs = { ism: "Laylo" };
// shaxs.salomlash.call(boshqaShaxs); // Salom, men Layloman!

// 16-
// function Odam(ism) {
//   this.ism = ism;
// }

// // Odam prototipiga gapir() metodini qo'shish
// Odam.prototype.gapir = function() {
//   console.log(`${this.ism} gapiryapti`);
// };

// let odam1 = new Odam("Olim");
// odam1.gapir(); // Konsolda: Olim gapiryapti

// 17-
// let katalog = {
//   texnika: { kompyuter: 5000, printer: 3000 },
//   oziq_ovqat: { non: 1000, sut: 2000 }
// };

// for (let bolim in katalog) {
//   let umumiy = Object.values(katalog[bolim]).reduce((a, b) => a + b, 0);
//   // Bo'lim nomini bosh harf bilan chiqarish
//   let nomi = bolim[0].toUpperCase() + bolim.slice(1).replace("_", "-");
//   console.log(`${nomi}: ${umumiy}`);
// }

// 18-
// let talabalar = { Ahmad: {}, Laylo: {} };

// // Har bir ism uchun dinamik xususiyat qo'shish
// for (let ism in talabalar) {
//   Object.defineProperty(talabalar[ism], "borligi", {
//     value: true,
//     writable: true,
//     enumerable: true,
//     configurable: true
//   });
// }

// console.log("Har bir ism uchun xususiyat qo'shildi:", talabalar);

// 19-
// let ballar = [90, 80, 70];

// // Array prototipiga o'rtacha() metodini qo'shish
// Array.prototype.ortacha = function() {
//   let sum = this.reduce((a, b) => a + b, 0);
//   return sum / this.length;
// };

// console.log("O'rtacha:", ballar.ortacha());
