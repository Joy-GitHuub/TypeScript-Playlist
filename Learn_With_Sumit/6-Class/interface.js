;
var User = /** @class */ (function () {
    function User(fullName, age) {
        var _this = this;
        this.fullName = fullName;
        this.age = age;
        this.formatUser = function () {
            return "name: ".concat(_this.fullName, " age: ").concat(_this.age);
        };
    }
    ;
    return User;
}());
;
var one = new User("JOY", 12);
console.log(one.formatUser());
