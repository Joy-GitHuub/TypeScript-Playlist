abstract class School{
    private name: string;
    private age: number;
    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    };
    abstract display(): void
};

class Student extends School{
    private role: string = "Student";
    private stander: string;
    constructor(name:string, age:number, stander: string) {
        super(name, age);
        this.stander = stander;
    };

    display(): object {
        return this;
    }
};

class Teacher extends School{
    private role: string = "Teacher";
    constructor(name:string, age:number,) {
        super(name, age);
    };
    classStart() : string {
        return `Class Start Time is ${new Date().toLocaleDateString()} => ${new Date().toLocaleTimeString()}`
    };
    display(): void {
        console.log(this);
    }
};

const myArray: (Student | Teacher)[] = [];

const p = new Student("JOY", 20, "BBA-2nd Year");
const q = new Student("Salam", 15, "Inter-1st Year");

const a = new Teacher("Koban", 40,);
const b = new Teacher("ARS", 46,);
myArray.push(p);
myArray.push(q);
myArray.push(a);
myArray.push(b);