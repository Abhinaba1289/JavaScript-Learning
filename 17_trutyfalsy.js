/** 
 * JavaScript Falsy and Truthy Values
 * ----------------------------------
 */

/** 
 * 🔴 Falsy Values
 * These values evaluate to false in a Boolean context.
 */
if (false) {
  console.log("false is truthy");
}
/** false → falsy */

if (0) {
  console.log("0 is truthy");
}
/** 0 → falsy */

if (-0) {
  console.log("-0 is truthy");
}
/** -0 → falsy */

if (0n) {
  console.log("0n is truthy");
}
/** 0n (BigInt zero) → falsy */

if ("") {
  console.log("Empty string is truthy");
}
/** "" → falsy */

if (null) {
  console.log("null is truthy");
}
/** null → falsy */

if (undefined) {
  console.log("undefined is truthy");
}
/** undefined → falsy */

if (NaN) {
  console.log("NaN is truthy");
}
/** NaN → falsy */

/** 
 * ✅ Surprising Truthy Values
 * These may look like they should be falsy but are actually truthy.
 */

if ([]) {
  console.log("[] is truthy");
}
/** [] (empty array) → truthy */

if ({}) {
  console.log("{} is truthy");
}
/** {} (empty object) → truthy */

if ("0") {
  console.log('"0" is truthy');
}
/** "0" (string) → truthy */

if ("false") {
  console.log('"false" is truthy');
}
/** "false" (string) → truthy */

if (new Boolean(false)) {
  console.log("new Boolean(false) is truthy");
}
/** Boolean object → always truthy even if it holds false */

if (Infinity) {
  console.log("Infinity is truthy");
}
/** Infinity → truthy */

if (-Infinity) {
  console.log("-Infinity is truthy");
}
/** -Infinity → truthy */

if (function() {}) {
  console.log("function is truthy");
}
/** function(){} → truthy */

if (new Date()) {
  console.log("Date object is truthy");
}
/** new Date() → truthy */

/**
 * 🔍 Summary:
 * Falsy → false, 0, -0, 0n, "", null, undefined, NaN
 * Truthy → Everything else! Including [], {}, "false", "0", functions, objects, etc.
 */
