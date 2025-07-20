var a = 10;
let b = 10;
const c = 10;


{
    // var a = 100;
    // let b = 100;
    // const c = 100;

    // console.log(a+" a inner")
    // console.log(b+" b inner")
    // console.log(c+" c inner")
    // local scope or block cope

    // now using same variable
    a =  12 // change the outer value also
    b = 12
    // c = 12
    console.log(a+" a inner")
    console.log(b+" b inner") 
    // console.log(c+" c inner") // because c is constant we cannot change 
}



console.log(a+" a outer") // changed that's way we don't use because it use same memory for same variable
console.log(b+" b outer")
console.log(c+" c outer")
// Global Scope



// let and const for same name variable redeclearation create different memories and var share same memory
let outer = 10;

{
    let outer = 12;
    let inner = 100;
    console.log(outer) // this is reference the local outer variable
    console.log(inner)
}

console.log(outer)
// console.log(inner) // -> we cannot access this innner variable because it is inside the block and when the block scope end the varible ends 

