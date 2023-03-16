interface IUserFormatter{
    formatUser: () => string;
};

class User implements IUserFormatter {
    constructor(private fullName: string, private age: number) {};

    formatUser = () => {
        return `name: ${this.fullName} age: ${this.age}`
    };
};
const one = new User("JOY", 12);
console.log(one.formatUser());
