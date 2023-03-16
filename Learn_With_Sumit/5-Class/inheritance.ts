// Class Inheritance: Extends

class User {
    private userName: string;
    private userAge: number;

    constructor (name: string, age: number){
        this.userName = name;
        this.userAge = age
    };

    public display():object{
        // console.dir(`${this.userName} ${this.userAge} ${info}`);
        return this
    };
};

class Student extends User{
    studentId:number;
    constructor(studentId:number, userName: string, userAge: number) {
        super(userName, userAge);
        this.studentId = studentId;
    };
};

const user1 = new User('Joy', 20);
// console.log(user1);
// user1.display();
const student1 = new Student(32, "Student1",43);
const x=  student1.display();
console.log(x);
console.log(student1.studentId);