const obj = new Object(); // singleton object
const obj2 = {}; // normal object
console.log(obj) // {}
console.log(obj2)// {}

obj.id = 123;
obj2.id = 123;
obj.id2 = 234;
obj2.id2 = 234;
console.log(obj)
console.log(obj2)
console.log(" ")
console.log(" ")
console.log("++++++++++++++ nested object ++++++++++++++++")


/*
{ id: 123, id2: 234 }
{ id: 123, id2: 234 }
*/

// nested object
const userData = {
    id:1,
    name:{                          
        firstName: "Abhinaba",
        lastName: "Mukherjee"
    }
}

console.log(userData) 
//{ id: 1, name: { firstName: 'Abhinaba', lastName: 'Mukherjee' } }   

console.log(`id of ${userData.name.firstName}$ {userData.name.LastName} is ${userData.id}`)


// if we write name?.firstName?. it means optional fetching

const copyOfAllObj = Object.assign({}, obj, obj2, userData);

console.log(copyOfAllObj) // and merge duolicate in to single
/*
{
  id: 1,
  id2: 234,
  name: { firstName: 'Abhinaba', lastName: 'Mukherjee' }
}
*/

// using spread operator

const allobj2 = {...obj, ...userData};
console.log(allobj2)




// work with multiple data

const data = [
    {
        name : "Abhi",
        id: 101
    },
    {
        name : "sam",
        id: 102
    }
]

console.log(data[0].name); // Abhi
console.log(data[1].name); // sam

//  keys values entries 
console.log(Object.keys(data))
console.log(Object.values(data))
console.log(Object.entries(data))
console.log(data.hasOwnProperty('id'))