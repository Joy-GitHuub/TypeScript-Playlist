// TypeScript Classes
/*
// Simple JavaScript Class

class Person {
  name: string;
}
const person = new Person();
person.name = "Jane";
*/
// Visibility In Class
// => public, private, protected,
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    Person.prototype.getInfo = function () {
        return ("".concat(this.name));
    };
    ;
    return Person;
}());
;
var person = new Person("Joy", 20);
console.log(person.age);
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
        // this.name = name;
    }
    ;
    Product.prototype.getName = function () {
        return this.name;
    };
    ;
    return Product;
}());
;
var product = new Product("Mobile", 15000);
console.log(product);
console.log(product.getName());
