/*
TypeScript Object Types
*/
// Normal JavaScript Object...
var carObj = {
    name: "TATA",
    model: "21CP",
    price: 4900000
};
// TypeScript Object...
var car = {
    name: "BMW",
    model: "Corolla",
    // year: "2009", // Error Not assign String
    year: 2009
};
car.name = "Frod";
// car.model= 2325 ; //Error Not Assign Number;
console.log(car);
// TypeScript Optional Properties in Object
var myInfo = {
    name: "Joy",
    age: 20
};
console.log(myInfo);
myInfo.age = 21;
myInfo.hobby = "Web Dev";
console.log(myInfo);
// TypeScript Index Signatures
var nameAgeMap = {
    firstName: "Joy",
    secondName: "Kalam",
    thirdName: 'Galam',
    firstAge: 21,
    secondAge: 31,
    thirdAge: 41
};
console.log(nameAgeMap);
nameAgeMap.secondAge = '33'; //correct
nameAgeMap.secondAge = 33; //correct
console.log(nameAgeMap);
var person = {
    name: "Kalam",
    age: 35,
    isPass: true,
    hobby: "Job"
};
person.name = "Salam"; //Change Person name
console.log(person);
var person2 = {
    name: "Balal",
    age: 65,
    isPass: true,
    hobby: "Book Reading"
};
console.log(person2);
