// TypeScript Arrays
/*
TypeScript has a specific syntax for typing arrays.
*/
var names = [];
names.push("Joy", "Don", "Kalam", "Salam", "Galam");
// names.push(true, 22) // Error 
console.log(names);
// Multiple type value assign array.
var myArray = [];
myArray.push("Joy", 12, "Niloy"); // boolean value not allow..
// Readonly
var readOnlyArray = ["Salman", "Amir"];
// readOnlyArray.push() // Push Not Allow
// readOnlyArray.pop() // Pop not Allow
console.log(readOnlyArray[1]); //Just Read Only
// readOnlyArray[1] = "Kobir"  //  Error Not Change array elements.
