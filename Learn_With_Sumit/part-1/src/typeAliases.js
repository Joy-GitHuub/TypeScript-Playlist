var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var userDetails = function (id, user) {
    return __assign(__assign({}, user), { id: id });
};
var q = userDetails(11, { name: "Joy", age: 20 });
console.log(q);
var helloFun;
helloFun = function (num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    console.log(num1, num2);
};
helloFun(1, 55);
var calculation;
calculation = function (x, y, z) {
    if (z === "sum") {
        return x + y;
    }
    else {
        return x - y;
    }
};
var x = calculation(5, 3, "sub");
console.log(x);
