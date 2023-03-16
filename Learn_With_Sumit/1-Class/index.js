/*
What is TypeScript?
=> TypeScript is a Syntactic Superset of JavaScript.

Why Shoul I Use TypeScript?
=> JavScript is a loosely typed language. I can be difficult to understand what types of data are being passed around in JavaScript
*/
var firstName = "Dylan";
console.log(firstName);
var lastName = "Gray";
// lastName = 55; Type Error 
console.log(lastName);
// Special Types=> Any Type Use
var anyType = "String";
anyType = 33; // no error as it can be "any" type
anyType = true; // no error as it can be "any" type
console.log(anyType);
// Special Types=> never type variable never assignable.
// let neverVar:never = '';
var neverVar;
// console.log(neverVar);
var typeNull = null;
// typeNull = "" 
console.log(typeNull);
