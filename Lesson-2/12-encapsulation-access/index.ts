// Access modifiers => Public, Private,Protected, Readonly

/* 
public - (default) allows access to the class member from anywhere
private - only allows access to the class member from within the class
protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below
*/

class User{
    private userName : string;
    private age: number;
    constructor (userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    };
    display():void{
        console.log(`Hi`);
    };
};

class Student extends User {
    private studentId : number;
    constructor(studentId: number, userName: string, age: number) {
        super(userName, age);
        this.studentId =studentId;
    }
    display() {
        return this;
    }
};

const student1 = new Student(101, "Joy", 21);
const user1 = new User("Joy", 20);
console.log(student1);
