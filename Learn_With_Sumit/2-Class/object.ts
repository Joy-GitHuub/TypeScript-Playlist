/* 
TypeScript Object Types
*/

// Normal JavaScript Object...
const carObj ={
    name: "TATA",
    model: "21CP",
    price: 4900000,
};


// TypeScript Object...
const car: {name: string,model: string, year: number }= {
    name: "BMW",
    model: "Corolla",
    // year: "2009", // Error Not assign String
    year: 2009,
};
car.name = "Frod";
// car.model= 2325 ; //Error Not Assign Number;
console.log(car);


// TypeScript Optional Properties in Object
const myInfo:{name: string, age: number, hobby?:string} ={
    name: "Joy",
    age: 20,
    // hobby: "Programming", Hobby is Optional Property..
};
console.log(myInfo);
myInfo.age = 21;
myInfo.hobby = "Web Dev";
console.log(myInfo);


// TypeScript Index Signatures
const nameAgeMap: {[index:string]:string | number} = {
    firstName : "Joy",
    secondName: "Kalam",
    thirdName: 'Galam',
    firstAge: 21,
    secondAge: 31,
    thirdAge: 41,
};
console.log(nameAgeMap);
nameAgeMap.secondAge = '33'; //correct
nameAgeMap.secondAge = 33; //correct
console.log(nameAgeMap);


// Object Type Assign
type myObj = {name: string, age:number, isPass: boolean, hobby?: string};
const person: myObj  = {
    name: "Kalam",
    age: 35,
    isPass: true,
    hobby: "Job", //Hobby is optional Property
};
person.name = "Salam"; //Change Person name
console.log(person);

const person2: myObj  = {
    name: "Balal",
    age: 65,
    isPass: true,
    hobby: "Book Reading", //Hobby is optional Property
};
console.log(person2);
