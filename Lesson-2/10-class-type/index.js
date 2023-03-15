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
var Product = /** @class */ (function () {
    function Product(id, name, price, inStock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.inStock = inStock;
    }
    ;
    Product.prototype.display = function () {
        return this;
    };
    ;
    return Product;
}());
;
var product1 = new Product(11, "Mobile", 12000, true);
// console.log(product1.display());
var School = /** @class */ (function () {
    function School(id, name, role) {
        this.id = id;
        this.name = name;
        this.role = role;
    }
    ;
    School.prototype.display = function () {
        return this;
    };
    ;
    return School;
}());
;
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(id, name, role, stander) {
        var _this = _super.call(this, id, name, role) || this;
        _this.stander = stander;
        return _this;
    }
    ;
    return Student;
}(School));
;
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Teacher.prototype.classTime = function (time, section) {
        console.log(time, section);
    };
    return Teacher;
}(School));
// const student1 = new Student(101, "Joy Bose", "Student", "Class 11");
// // console.log(student1.display());
// const teacher1 = new Teacher(501, "Sujon-Sir", "Teacher");
// console.log(teacher1.display());
// teacher1.classTime(new Date(), "Class-5 Section-1");
var x = 33;
console.log(typeof x);
