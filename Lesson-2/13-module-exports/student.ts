// let studentName:string = "Joy";
// let studentAge: number = 21;

export let studentName:string = "Joy";
export let studentAge: number = 21;


export function myFun(num1:number, num2:number):number {
    return num1 + num2 ;
};

export function arraySum(array: number[]): number{
    let sum = 0;
    for (const x of array) {
        sum +=x;
    };
    return sum;
}

// export default {studentName, studentAge}