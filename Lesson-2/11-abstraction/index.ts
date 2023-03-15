// Abstraction

abstract class User{
    userName : string;
    age: number;
    constructor (userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    };
    abstract display():void;
};

class Student extends User {
    studentId : number;
    constructor(studentId: number, userName: string, age: number) {
        super(userName, age);
        this.studentId =studentId;
    }
    display() {
        return this;
    }
};

const student1 = new Student(101, "Joy", 21);
console.log(student1.display());
