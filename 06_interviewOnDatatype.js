// datatype -> 2 type -> pri and non-pri

// primitive -> 7 type -> String , Number, Boolean, null, undefined, symbol(making unique datatype), BigInt


// JavaScript is a dynamically or statically type language?

// ans : it is a dynamically typed language because the interpreter assigns variables a type during runtime based on the variable's value at the time

let a = 33;
let b = "33";


// Non-primitive or Reference type : Array, object, functions


// Symbol data type

let id = Symbol('123');
console.log(id) // Symbol(123)
let nid = Symbol('123');
console.log(nid) // Symbol(123)
console.log(nid == id) // not saem they are unique

// BigInt
const int =  12323123123123123123123n;


// non - primitive

// Array
let arr = [1,2,3,4,54,5];
// Object
const obj ={
    a:'a',
    b: 'b'
}
// function
const myFunction = function(){ // function object
    console.log("Hello World");
}

console.log(typeof arr) // object
console.log(typeof obj) // object
console.log(typeof myFunction) // function