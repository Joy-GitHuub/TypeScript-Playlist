// Type Aliases
type string_numberType = string | number;
type userType = {name: string, age: number};

const userDetails = (id: string_numberType, user: userType) : object => {
    return {...user, id}
};

const q = userDetails(11, {name: "Joy", age: 20});
console.log(q);

let helloFun : (x: number, y: number)=> void;

helloFun = (num1: number, num2: number = 10)  =>{
    console.log(num1 , num2);
};
helloFun(1,55);


let calculation :(x: number, y: number, z: string)=> number;

calculation = (x, y, z) => {
    if(z === "sum") {
        return x + y;
    }else{
        return x -y;
    }
};
const x = calculation(5, 3, "sub");
console.log(x);
