let score = 400; // -? auto detect Number
let number = new Number(400) // -> we specify to Number
console.log(score +" "+ typeof score) // variable Number
console.log(number +" "+ typeof number) // type object
console.log(number) // [Number: 400]
console.log(number.toString()) // 400 convert to string
console.log(number.toFixed(2)) // 400 convert to string but 2 decimal point

let num = 2020.20656;
console.log(num.toPrecision(6)) // -? 2020.21

let crore = 10000000;
console.log(crore.toLocaleString()); // readble number 1,00,00,000 -> Us type
console.log(crore.toLocaleString('en-IN')); // readble number 1,00,00,000 -> Indian type

console.log(Number.MIN_VALUE)
console.log(Number.MAX_VALUE)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_SAFE_INTEGER)
                            

// +++++++++++++++Maths++++++++++++++++++ // same like Java like abs ceil floor random pow max min
console.log(Math.floor(Math.random()*(9000-1000+1)+1000));