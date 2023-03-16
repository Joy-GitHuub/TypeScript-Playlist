// TypeScript Union Types

// Union types are used when a value can be more than a single type.
// Such as when a property would be string or number.

function printStatusCode(code: string|number):string {
    return `Status Code ${code}`
};

const x:string= printStatusCode(400);
const y:string= printStatusCode('200');
console.log(x);
console.log(y);

// printStatusCode(true); //Error 