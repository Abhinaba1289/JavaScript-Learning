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




// arrow functions and this keyword

const course = {
    courseName:"MERN Stack",
    coursePrice: 10000,
    courseId: 101,
    courseMessage: function(){
        // console.log(`Learn the stack call ${courseName}`); // ReferenceError: courseName is not defined
        console.log(`Learn the stack call ${this.courseName}`); // here we use this variable to get the course name inside the object or current context
        console.log(this) // -> print the current context means the object course
    }
}


course.courseMessage();
console.log(this) // -> empty object {} in Npde environment but it different in browser -> browser gives a window object with all the events 



// but in node when we log this it show this ->
function abhi(){
    console.log(this)
}

abhi() //->
{/* <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]
} */}


// but we cannot access variable using this inside a function
function chai() {
    const name = "Abhi";
    console.log(this.name) // it show undefined
}
chai()


//  another way of function

// function expression 
const funExp = function(){
    console.log("Abhi")
}

// annonymus function 
// const funExp = (){
//     console.log("Abhi")
// }

// arrow function 
// const funExp = () =>{
//     console.log("Abhi")
// }

// implecit return
// let a = () => "Abhi"; // no return without {}
// let a = () => ("Abhi") // no return without {}
let a = num => "Abhi"; // no return without {}

console.log(a(3))



// Immediately Invoked Functon Expression ()() or IIFE
(()=>{
    console.log("DB Connected");
})() 
// -> Immediately invoke function it is done for some initialization or setup code that you want to run immediately without polluting the global scope.