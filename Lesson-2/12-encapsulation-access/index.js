// Access modifiers => Public, Private,Protected, Readonly
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
/*
public - (default) allows access to the class member from anywhere
private - only allows access to the class member from within the class
protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below
*/
var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    ;
    User.prototype.display = function () {
        console.log("Hi");
    };
    ;
    return User;
}());
;
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(studentId, userName, age) {
        var _this = _super.call(this, userName, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.display = function () {
        return this;
    };
    return Student;
}(User));
;
var student1 = new Student(101, "Joy", 21);
var user1 = new User("Joy", 20);
console.log(student1);
