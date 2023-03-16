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
var School = /** @class */ (function () {
    function School(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    return School;
}());
;
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, stander) {
        var _this = _super.call(this, name, age) || this;
        _this.role = "Student";
        _this.stander = stander;
        return _this;
    }
    ;
    Student.prototype.display = function () {
        return this;
    };
    return Student;
}(School));
;
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.role = "Teacher";
        return _this;
    }
    ;
    Teacher.prototype.classStart = function () {
        return "Class Start Time is ".concat(new Date().toLocaleDateString(), " => ").concat(new Date().toLocaleTimeString());
    };
    ;
    Teacher.prototype.display = function () {
        console.log(this);
    };
    return Teacher;
}(School));
;
var myArray = [];
var p = new Student("JOY", 20, "BBA-2nd Year");
var q = new Student("Salam", 15, "Inter-1st Year");
var a = new Teacher("Koban", 40);
var b = new Teacher("ARS", 46);
myArray.push(p);
myArray.push(q);
myArray.push(a);
myArray.push(b);
