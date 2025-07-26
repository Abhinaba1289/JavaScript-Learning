/** 
 * JavaScript Operators Overview
 * -----------------------------
 */

/** 
 * ✅ Arithmetic Operators 
 */
let a = 10, b = 3;

let sum = a + b;        /** + : Addition → 13 */
let diff = a - b;       /** - : Subtraction → 7 */
let mul = a * b;        /** * : Multiplication → 30 */
let div = a / b;        /** / : Division → 3.333... */
let mod = a % b;        /** % : Modulus (remainder) → 1 */
let exp = a ** b;       /** ** : Exponentiation → 10^3 = 1000 */
a++;                    /** ++ : Increment (post) */
b--;                    /** -- : Decrement (post) */

/** 
 * ✅ Assignment Operators 
 */
let x = 5;

x += 2;  /** x = x + 2 → 7 */
x -= 1;  /** x = x - 1 → 6 */
x *= 2;  /** x = x * 2 → 12 */
x /= 3;  /** x = x / 3 → 4 */
x %= 3;  /** x = x % 3 → 1 */
x **= 2; /** x = x ** 2 → 1 */

/** 
 * ✅ Comparison Operators 
 */
let c = 5, d = "5";

console.log(c == d);   /** == : Equal (value only) → true */
console.log(c === d);  /** === : Strict equal (value + type) → false */
console.log(c != d);   /** != : Not equal → false */
console.log(c !== d);  /** !== : Strict not equal → true */
console.log(c > 3);    /** > : Greater than → true */
console.log(c < 10);   /** < : Less than → true */
console.log(c >= 5);   /** >= : Greater than or equal → true */
console.log(c <= 4);   /** <= : Less than or equal → false */

/** 
 * ✅ Logical Operators 
 */
let p = true, q = false;

console.log(p && q);   /** && : AND → false */
console.log(p || q);   /** || : OR → true */
console.log(!p);       /** ! : NOT → false */

/** 
 * ✅ Nullish Coalescing Operator (??)
 * Returns the right-hand value if the left is null or undefined.
 */
let username = null;
let displayName = username ?? "Guest";
/** username is null → displayName becomes "Guest" */

let name = "";
let nickname = name ?? "Anonymous";
/** name is "" (empty string, not null) → nickname becomes "" */

/** 
 * ✅ Ternary Operator 
 * Syntax: condition ? trueValue : falseValue
 */
let age = 18;
let access = (age >= 18) ? "Allowed" : "Denied";

/** 
 * ✅ Typeof Operator 
 */
console.log(typeof 123);       /** "number" */
console.log(typeof "hello");   /** "string" */
console.log(typeof true);      /** "boolean" */
console.log(typeof null);      /** "object" ← known JavaScript quirk */
console.log(typeof undefined); /** "undefined" */
console.log(typeof {});        /** "object" */
console.log(typeof []);        /** "object" */
console.log(typeof function(){});
/** "function" */

/** 
 * ✅ Bitwise Operators (less commonly used)
 */
let n1 = 5;     // 0101
let n2 = 3;     // 0011

console.log(n1 & n2);  /** & : AND → 0001 (1) */
console.log(n1 | n2);  /** | : OR → 0111 (7) */
console.log(n1 ^ n2);  /** ^ : XOR → 0110 (6) */
console.log(~n1);      /** ~ : NOT → -(n1+1) → -6 */
console.log(n1 << 1);  /** << : Left shift → 1010 (10) */
console.log(n1 >> 1);  /** >> : Right shift → 0010 (2) */

/**
 * ✅ Optional Chaining (?.)
 * Safely access deeply nested properties
 */
let user = {
  profile: {
    name: "Alex"
  }
};

console.log(user?.profile?.name);     /** "Alex" */
console.log(user?.address?.city);     /** undefined (no error) */

/**
 * ✅ Delete Operator
 * Removes a property from an object
 */
let person = { name: "John", age: 30 };
delete person.age;
/** person = { name: "John" } */

/**
 * ✅ in Operator
 * Checks if a property exists in object
 */
console.log("name" in person);   /** true */
console.log("age" in person);    /** false */

/**
 * ✅ instanceof Operator
 * Checks if an object is an instance of a class/constructor
 */
console.log([] instanceof Array);       /** true */
console.log(new Date() instanceof Date);/** true */

