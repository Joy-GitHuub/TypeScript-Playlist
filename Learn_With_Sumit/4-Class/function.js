// TypeScript Functions
// Return Type
function getTime() {
    return new Date().getDate();
}
;
function add(num1, num2) {
    return num1 + num2;
}
;
function message(msg) {
    return "".concat(msg);
}
;
var x = getTime();
console.log(x);
var y = add(40, 10);
console.log(y);
var a = message("HELLO");
console.log(a);
function display(num1, num2, cb) {
    var x = cb(num1, num2);
    console.log(x);
}
;
display(12, 8, add);
// Default Parameters in a Function
function sub(a, b) {
    if (b === void 0) { b = 0; }
    return a - b;
}
console.log(sub(10));
console.log(sub(10, 5));
// Optional Parameters
function namePrint(fname, lname) {
    if (lname) {
        console.log("".concat(fname, " ").concat(lname));
    }
    else {
        console.log("".concat(fname));
    }
    ;
}
;
namePrint("Joy");
namePrint("Joy", "Bose");
function numbers(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (p, c) { return p + c; }, 0);
}
;
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = numbers(12, 8, 1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(sum);
