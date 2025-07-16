

const arr = [1,2,3,4,5,6];
console.log(arr)

// shallow copy -> same memory share 
// deep copy -> different memory after copy


// array methods 
const arr2 = new Array(1,2,3,4,5,6,7,8);
console.log(arr2[6])
arr.push(2);
arr2.push(2);

console.log(arr);
console.log(arr2);

arr.pop();
arr2.pop();
arr.pop();
arr2.pop();

arr.unshift(4) // add front
arr2.unshift(4)

console.log(arr);
console.log(arr2)

arr.shift(4) //  delete front
arr2.shift(4)

console.log(arr);
console.log(arr2)
console.log(arr.includes(5)); // true
console.log(arr2.indexOf(5)) // index


// slice -> 
let array = [0,1,2,3,4,5,6]
console.log("A "+array);
console.log("Slice "+array.slice(1,4)); // slice() print from index to before the index no.
console.log(" ")


// splice
console.log("B "+array);
console.log("Splice "+array.splice(1,4)); // it print the index number to number of elements (index, no. of eements  after the index)



let a = ['a', 'b', 'c'];
let b = ['d', 'e', 'f'];

// if we directly  push or concat a will take b as a single value
// a.push(a);
// console.log(a)
// a.concat(a);
// console.log(a)

// -> [ 'a', 'b', 'c', [ 'd', 'e', 'f' ] ]


// creatinng a new aliable to get the whole array 
// let c = a.push(b);
let d = a.concat(b);
// console.log(a)
console.log(d) // -> [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// we wil use spread operator like glass er jol ta pregelo th spread ba choriye jabe serokom

let newarr = [...a, ...b]
console.log(newarr) // ... spread operator -> [ 'a', 'b', 'c', 'd', 'e', 'f' ]


// converting to array and chcking
console.log(Array.isArray("Abhinaba Mukherjee")) // ->false because it is a string
console.log(Array.from("Abhinaba Mukherjee")) /* convert my name to array -> [
  'A', 'b', 'h', 'i', 'n',
  'a', 'b', 'a', ' ', 'M',
  'u', 'k', 'h', 'e', 'r',
  'j', 'e', 'e'
] */
console.log(Array.of("Abhinaba Mukherjee")) // convert my name to array my the while name is a single element -> [ 'Abhinaba Mukherjee' ]