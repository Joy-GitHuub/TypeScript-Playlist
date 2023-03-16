// TypeScript Classes

// Class visibility

/* 
There are three main visibility modifiers in TypeScript.

public - (default) allows access to the class member from anywhere
private - only allows access to the class member from within the class
protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below
*/

abstract class Family{
    readonly name: string;
    age: number;
    constructor(name:string, age: number ) {
        this.name = name;
        this.age = age;
    };
    abstract print(): void;
};

class Child extends Family{
    private relation: string = "Child";
    constructor(name:string, age: number) {
        super(name, age)
    };
    print(): string{
        return `My name is ${this.name}. I am ${this
        .age} year old.`
    };
};

class Relative extends Family{
    private relation: string = "Relative";
    constructor(name: string, age:number, relation?: string){
        super(name, age);
        if (relation) {
            this.relation = relation;
        }
    }
    print(): string{
        return `My name is ${this.name}. I am ${this
        .age} year old.`
    };
};

const myFamily: (Child | Relative)[] = [];

const a = new Child("Joy", 20);
const b = new Child("Niloy", 15);
const c = new Relative("LD", 38, );
const d = new Relative("Ohona", 5, "Sister");
myFamily.push(a,b, c,d);

a.age = a.age + 1;
a.age = a.age + 1;
// a.name = "" // Error Name is not allow again Assing.. 
console.log(a);