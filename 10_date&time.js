let myDate = new Date();
console.log(myDate) // 2025-07-16T07:44:05.828Z

console.log(myDate.toString()) // Wed Jul 16 2025 13:14:05 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()) // Wed Jul 16 2025

console.log(myDate.toLocaleDateString()) // 16/7/2025

console.log(myDate.toLocaleTimeString()) // 1:14:05 pm

console.log(myDate.toLocaleString()) // 16/7/2025, 1:14:05 pm


console.log("+++++++++ User Defined Date ++++++++++")
let newDate = new Date(2025, 7, 1, 12,4);
console.log(newDate);
console.log(newDate.toDateString());
console.log(newDate.toTimeString());
console.log(newDate.getTime());


console.log("+++++++++ User Defined Date2 ++++++++++")
let newDate2 = new Date("2025-2-3");
console.log(newDate2);
console.log(newDate2.toDateString());
console.log(newDate2.toTimeString());

console.log(Math.floor(Date.now()/1000))

let date3 = new Date();
console.log(date3.toString())
console.log(date3.getMonth()+1);
console.log(date3.getDay()+1); // wed week day
console.log(date3.getDay()+1); // wed week day
console.log(date3.getFullYear());
console.log(date3.toLocaleDateString());
console.log(date3.toLocaleTimeString());
