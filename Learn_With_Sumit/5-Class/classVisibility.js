// TypeScript Classes
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
// Class visibility
/*
There are three main visibility modifiers in TypeScript.

public - (default) allows access to the class member from anywhere
private - only allows access to the class member from within the class
protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below
*/
var Family = /** @class */ (function () {
    function Family(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    return Family;
}());
;
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.relation = "Child";
        return _this;
    }
    ;
    Child.prototype.print = function () {
        return "My name is ".concat(this.name, ". I am ").concat(this
            .age, " year old.");
    };
    ;
    return Child;
}(Family));
;
var Relative = /** @class */ (function (_super) {
    __extends(Relative, _super);
    function Relative(name, age, relation) {
        var _this = _super.call(this, name, age) || this;
        _this.relation = "Relative";
        if (relation) {
            _this.relation = relation;
        }
        return _this;
    }
    Relative.prototype.print = function () {
        return "My name is ".concat(this.name, ". I am ").concat(this
            .age, " year old.");
    };
    ;
    return Relative;
}(Family));
;
var myFamily = [];
var a = new Child("Joy", 20);
var b = new Child("Niloy", 15);
var c = new Relative("LD", 38);
var d = new Relative("Ohona", 5, "Sister");
myFamily.push(a, b, c, d);
a.age = a.age + 1;
a.age = a.age + 1;
// a.name = "" // Error Name is not allow again Assing.. 
console.log(a);
