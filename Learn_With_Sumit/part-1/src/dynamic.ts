let p : any[] = [];

p.push("Bangladesh");
p.push(50);
p.push(true);
// console.log(p);


const myFunc = () => {
    console.log(`Hello`);
};


let secondFun : Function;
secondFun = () =>  {
    return ``
};


let thirdFunc = (a:string, b:string, c: string = '3')=> {
    // c is a Default parameter
    console.log(c);
    console.log(a, b);
};
thirdFunc("Joy", "Bose");

let fourFunc = (a:string, b:string, c?: number) => {
    console.log(a, b, c);
};
fourFunc('a', 'b');
fourFunc('a', 'b', 1);


let returnFun = (a:number,b:number): number => {
    return a+ b;
};
let x= returnFun(3,3);
console.log(x);
