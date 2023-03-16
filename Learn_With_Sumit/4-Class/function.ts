// TypeScript Functions

// Return Type
function getTime():number{
    return new Date().getDate();
};


function add(num1:number, num2:number,):number{
    return num1 + num2;
};

function message(msg:string):string {
    return `${msg}`;
};
const x = getTime();
console.log(x);
const y = add(40, 10);
console.log(y);
const a = message("HELLO");
console.log(a);


function display(num1:number, num2:number,cb:Function):void{
    const x:number = cb(num1, num2)
    console.log(x); 
};

display(12, 8, add);


// Default Parameters in a Function
function sub(a:number, b:number = 0):number{
    return a-b;
}
console.log(sub(10));
console.log(sub(10,5));

// Optional Parameters
function namePrint(fname:string, lname?:string):void{
    if (lname) {
        console.log(`${fname} ${lname}`);
    }else{
        console.log(`${fname}`);
    };
};
namePrint("Joy");
namePrint("Joy", "Bose");

function numbers(a:number, b:number, ...rest:number[]):number{
    return a+b+ rest.reduce((p,c) => p+c, 0);
};
const array: number[] = [1,2,3,4,5,6,7,8,9]
const sum:number = numbers(12, 8, 1,2,3,4,5,6,7,8,9);
console.log(sum);
