// TypeScript Class

class User{
    // Properties, methods, constructor
    private userName: string;
    protected userAge: number;
    constructor(name: string, age:number) {
        this.userName = name;
        this.userAge = age;
    };
    display():void {
        console.log(`username: ${this.userName}, userage: ${this.userAge}`);
    }
};

// Class Object
const user1 = new User("Joy Bose", 20);
user1.display()
// console.log(user1.userAge); // Accessable
// console.log(user1.userName); // Not Access
