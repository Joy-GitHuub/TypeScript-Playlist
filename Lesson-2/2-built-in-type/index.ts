let userId : number;
let firstName: string;
let lastName: string;
let fullName : string;
let isActivated: boolean;

userId = 100;
firstName = "Joy";
lastName = "Bose";
isActivated = false;

fullName = firstName.concat(lastName);
console.log(fullName.toUpperCase());

console.log(userId, firstName, lastName, isActivated);
// console.log(userId);

function display(): void {
    console.log(`Hi I am Display`);
};
display();