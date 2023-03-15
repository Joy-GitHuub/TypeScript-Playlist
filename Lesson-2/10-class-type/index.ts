class Product{
    private name: string;
    private inStock: boolean;
    private price: number;
    private id: number;
    public constructor( id: number,name: string, price: number,inStock: boolean ){
        this.id =id;
        this.name =name;
        this.price =price;
        this.inStock =inStock;
    };

    public display() {
        return this;
    };
};

const product1 = new Product(11, "Mobile", 12000, true);
// console.log(product1.display());

class School{
    id: number;
    name : string;
    role: string;
    public constructor(id:number, name: string, role: string, ) {
        this.id = id;
        this.name = name;
        this.role = role;
    };
    public display() {
        return this;
    };
};

class Student extends School{
    stander : string;
    constructor(id:number, name:string, role:string, stander: string) {
        super(id, name, role)
        this.stander = stander;
    };
};

class Teacher extends School{
    classTime(time: Date, section: string) {
        console.log(time, section);
    }
}

// const student1 = new Student(101, "Joy Bose", "Student", "Class 11");
// // console.log(student1.display());

// const teacher1 = new Teacher(501, "Sujon-Sir", "Teacher");
// console.log(teacher1.display());

// teacher1.classTime(new Date(), "Class-5 Section-1");

let x : unknown = 33;

console.log(typeof (x  as string))
