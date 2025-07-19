function sayMyname() {
    console.log("I am Abhi")
}

sayMyname()
sayMyname()
sayMyname() // calling function
sayMyname // it is reference



function isLoggedIn(name = "Abhi") { // Default Parameters
    return `${name}! Welcome to the Show`;
}

console.log(isLoggedIn("Abhinaba"))


function add(...a) { // a is now a array for -> here ... is rest operator
    // let s=0;
    // for (let i = 0; i < a.length; i++) {
    //     s+=a[i]; 
    // }
    // console.log(s)
    return a; // ---> [ 1, 2, 3, 4, 5, 6 ]
}

let c = add(1,2,3,4,5,6);
console.log(c) // -> undefined becase add() do not return something

// for this -> function add(b, c, ...a) { return a} after first 2 variable rest values are stored in the array a -> [ 3, 4, 5, 6 ]




// passing a object as an argument 

const user = {
    a:"abhi",
    b:21
}

function printObj(data) {
    return `a:${data.a} and b: ${data.b}`
}
console.log(printObj(user))
console.log( // directly passing an object 
    printObj({
    a:"abhi",
    b:21
    })
)
