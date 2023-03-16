// Class Inheritance: Extends
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, age) {
        this.userName = name;
        this.userAge = age;
    }
    ;
    User.prototype.display = function () {
        // console.dir(`${this.userName} ${this.userAge} ${info}`);
        return this;
    };
    ;
    return User;
}());
;
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(studentId, userName, userAge) {
        var _this = _super.call(this, userName, userAge) || this;
        _this.studentId = studentId;
        return _this;
    }
    ;
    return Student;
}(User));
;
var user1 = new User('Joy', 20);
// console.log(user1);
// user1.display();
var student1 = new Student(32, "Student1", 43);
var x = student1.display();
console.log(x);
console.log(student1.studentId);
