/*
TypeScript Tuples
=> A Tuple is a typed array with a pre-defined length and types for each index.

Tuples are great because they allow each element in the array to be a known type of value.

To define a tuple, specify the type of each element in the array
*/
var ourTuple; // this array just 2 elemets length is limeted. 
ourTuple = ["Joy", 3,]; // initialize correctly.
ourTuple = ["Salman", 4]; // 
console.log(ourTuple);
ourTuple.push("Give"); // Work perfect;
ourTuple.push("Give Time"); // Work perfect;
ourTuple.push(3); // Work perfect;
// ourTuple.push(true); // Error;
console.log(ourTuple);
ourTuple.pop();
console.log(ourTuple);
// readonly
var ourReadonlyTuple = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off'); // Error Eeadonly 
console.log(ourReadonlyTuple);
// Named Tuples
var graph = [55.2, 41.3];
console.log(graph);
// Destructuring Tuples
// Since tuples are arrays we can also destructure them.
var a = graph[0], b = graph[1];
console.log(a, b);
var tupleArray;
tupleArray = ["Joy", false,]; //Limit 2 elements assign.
// tupleArray = ["",true, 3] //Error
tupleArray.push(true);
// tupleArray.push(44); //Error
// tupleArray.pop()
// tupleArray.pop()
tupleArray[0] = 'true';
// tupleArray[2] = 'true'; //Error Do Not Change the type in elements.
console.log(tupleArray);
/* // Readonly myArray
let myReadOnlyArray:readonly [number, number] = [35, 62];
console.log(myReadOnlyArray);
// myReadOnlyArray.push() //Error
// myReadOnlyArray.pop() //Error
// myReadOnlyArray[0] = 44; //Error Not Assign
console.log(myReadOnlyArray); */ 
