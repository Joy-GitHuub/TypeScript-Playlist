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
class Person{
    private name: string;
    public age: number;

    constructor(name:string, age:number) {
        this.name =name;
        this.age = age;
    };
    public getInfo():string {
        return (`${this.name}`);
    };
};
const person = new Person("Joy", 20);
console.log(person.age);



class Product{
    constructor(private name: string, private price: number){
        // this.name = name;
    };
    getName():string {
        return this.name;
    };
};
const product = new Product("Mobile", 15000);
console.log(product);
console.log(product.getName());

