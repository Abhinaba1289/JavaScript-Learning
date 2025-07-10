let score = null;

console.log(typeof score);
console.log(score);

let stringScore = Number(score); // Number Bloolean
console.log(typeof (stringScore));
console.log(stringScore); // Nan not a number

/*
comverting to Number
"33" -> 33
"33abs" -> NaN
undefined -> NaA
null -> 0
true -> 1
false -> 0

Bloolean conversion
33 -> true
"33" -> true
"" -> false;
0 -> false
1 -> true
null -> false
undefined -> false
*/

let istrue = undefined;
let check = Boolean(istrue);
console.log(+check)