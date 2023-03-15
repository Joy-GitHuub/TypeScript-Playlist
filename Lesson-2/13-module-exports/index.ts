import  { arraySum, myFun, studentAge, studentName } from "./student";

function display():void {
    console.log(studentName,studentAge);
};

let x= myFun(20, 21);
console.log(x);
display();

let array : number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let y =  arraySum(array);
console.log(y);
