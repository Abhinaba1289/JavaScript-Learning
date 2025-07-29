let nums = [1,2,3,4,5,6];
// for (const num of nums) {
//     console.log(num)
// }



// basic Map  -> object store key value pairs -> stores unique keys
let map = new Map();

map.set(1, "Coding");
map.set(2, "Development");
map.set(3, "Software Engineer");
map.set(3, "Software Engineer");
map.set(3, "Software Engineer");
map.set(3, "Software Engineer");
map.set(3, "Software Engineer");


console.log(map); // Map(3) { 1 => 'Coding', 2 => 'Development', 3 => 'Software Engineer' }

for (const i of map) {
    console.log(i)
}

/*
[ 1, 'Coding' ]
[ 2, 'Development' ]
[ 3, 'Software Engineer' ]
  */

for (const [key, value] of map) { // destructure to apply own printing statement using key and value
    console.log(`key: ${key}, Value: ${value}`);
}
/*
key: 1, Value: Coding
key: 2, Value: Development
key: 3, Value: Software Engineer
 */

const obj = {
    name: "John",
    age: 30,
    city: "New York"
}

// for (const [key, value] of obj) {
//     console.log(`key: ${key}, Value: ${value}`);
//     // This will throw an error because obj is not iterable
// }


// here the for...in loop is used to iterate over the properties of an object
for(const key in obj){
    console.log(`key: ${key} => obj: ${obj[key]}`)
}
/*
key: name => obj: John
key: age => obj: 30
key: city => obj: New York
*/

let arr = [11,22,33,44,55,66,77,88,99];
for (const key in arr) {
    console.log(key) // it prints the index of the array
    console.log(arr[key]) // it prints the value at that index
}


// For Each Loop 
// arr.forEach(ele => {
//     console.log(ele)
// });
/*11
22
33
44
55
66
77
88
99*/

function print(params) {
    console.log(params)
}

arr.forEach(print);