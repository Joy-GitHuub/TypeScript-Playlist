let a :string = "4";
const b : number  = 4;

// Array Type
const array: string[] = [];
array.push("Joy");
// array.push(53); Error Throw...

const numberArray : number[] = [];
numberArray.push(35);
// numberArray.push("35"); Error Throw...


const myArray: (string | number | boolean)[] =[];
myArray.push('Joy', 21, false);

// Normal Variable
let x: string | number = 33;
x = "Joy";
// console.log(x);


let myObject: {name: string, age: number, isTrue: boolean};
myObject = {
    name: "Joy",
    age: 42,
    isTrue: false, 
};
console.log(myObject);
