var p = [];
p.push("Bangladesh");
p.push(50);
p.push(true);
// console.log(p);
var myFunc = function () {
    console.log("Hello");
};
var secondFun;
secondFun = function () {
    return "";
};
var thirdFunc = function (a, b, c) {
    if (c === void 0) { c = '3'; }
    // c is a Default parameter
    console.log(c);
    console.log(a, b);
};
thirdFunc("Joy", "Bose");
var fourFunc = function (a, b, c) {
    console.log(a, b, c);
};
fourFunc('a', 'b');
fourFunc('a', 'b', 1);
var returnFun = function (a, b) {
    return a + b;
};
var x = returnFun(3, 3);
console.log(x);
