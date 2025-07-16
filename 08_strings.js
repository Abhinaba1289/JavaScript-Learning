const name = "Abhinaba age";
const age = 22;

console.log(name + " " + age ); // using + operator
console.log(`My name is ${name} I am ${age} years old`); // using backtics

//  string using object ]
const str = new String("Abhi"); 
// store in a object like with key value pairs
/*
    str = {
        '0':'A',
        '1':'b',
        '2':'h',
        '3':'i'
    }
*/
console.log(str);
console.log(str.toUpperCase());
console.log(str.trim());
console.log(str.charAt(2));
console.log(str.replace('A','K'))
console.log(str.includes('A'))

// string to array 
let string = "Abhinaba-mukherjee-portfolio";
const arr = string.split('-');
console.log(arr)