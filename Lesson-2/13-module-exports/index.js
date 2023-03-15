"use strict";
exports.__esModule = true;
var student_1 = require("./student");
function display() {
    console.log(student_1.studentName, student_1.studentAge);
}
;
var x = (0, student_1.myFun)(20, 21);
console.log(x);
display();
var array = [10, 20, 30, 40, 50, 60, 70, 80, 90];
var y = (0, student_1.arraySum)(array);
console.log(y);
