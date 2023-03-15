"use strict";
// let studentName:string = "Joy";
// let studentAge: number = 21;
exports.__esModule = true;
exports.arraySum = exports.myFun = exports.studentAge = exports.studentName = void 0;
exports.studentName = "Joy";
exports.studentAge = 21;
function myFun(num1, num2) {
    return num1 + num2;
}
exports.myFun = myFun;
;
function arraySum(array) {
    var sum = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var x = array_1[_i];
        sum += x;
    }
    ;
    return sum;
}
exports.arraySum = arraySum;
// export default {studentName, studentAge}
