// Function Singnature
let userInfo1 : () => void;
let userInfo2 :  (name: string, age: number) => string;
let main: (name: string) => string;

// userInfo1= () => {
//     return("Joy Bose is 21 Year Old");
// };
// userInfo1();

// main =() => {
//     console.log(`Call`);
// };
// main("Joy")

userInfo2 =(name, age) => {
    return `My name is ${name} and I am ${age} year old`
};

let x:string =  userInfo2("Joy Bose", 21);
console.log(x);
