console.log(addone(5)); // calling before initializaton the function

function addone(num){
    return num+1;
}

console.log(addone(5)); // calling after initializaton the function

// okay no problem for this 

// now for function experssion same thing 

addtwo(5);   // -> here the error throw ReferenceError: Cannot access 'addtwo' before initialization 

const addtwo = function (num){
    return num + 2;
}

addtwo(5);


// this is hoisting 