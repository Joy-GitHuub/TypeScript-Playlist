let userNames: string[];
let userAges : number[];
let infoArray : Array<object>

userNames = ["Joy", "Salam", "Borkot", "Rofik"];
userAges = [21, 53, 51, 45];

infoArray =[
    {id: 1, name: "Joy", age: 21},
    {id: 2, name: "Niloy", age: 17},
];

let multiplyTypes : (string | number | object)[];

multiplyTypes = ["Joy", 21, {id: 11, hobby: "Programming"}];

console.log(userAges.sort());
console.log(userNames.sort());
