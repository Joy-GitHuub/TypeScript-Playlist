// TypeScript Union Types
// Union types are used when a value can be more than a single type.
// Such as when a property would be string or number.
function printStatusCode(code) {
    return "Status Code ".concat(code);
}
;
var x = printStatusCode(400);
var y = printStatusCode('200');
console.log(x);
console.log(y);
// printStatusCode(true); //Error 
