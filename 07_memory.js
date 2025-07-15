// Stack (primitive), Heap(Non primitive)





    // user 2  --->|
    // user ------>|-----> pointing to same object in heap
    // abc@gmail.com -> bmail
    // abhi@gmail.com -> mail
    // stack 






// {
//     email: "a@gmail.com",
//     name:"Abhinaba"
// }

    // heap 

let mail = "abhi@gmail.com"; // it will  go to the stack 

let bmail = mail; // it copy the mail
bmail = "abc@gmail.com"

console.log(mail);
console.log(bmail);


let user = {
    email: "a@gmail.com",
    name:"Abhinaba"
}

let user2 = user;

user2.email = mail;

console.log(user.email);
console.log(user.email); // user and and user2 share same memory so they changed in -> mail
