// TypeScript Type Aliases and Interfaces
var car = {
    type: "Tyota",
    model: "Corolla",
    year: 2001
};
var car2 = {
    type: "Frod",
    model: "Corolla",
    year: 2009
};
console.log(car);
console.log(car2);
var productsArray = [];
var product1 = {
    id: 1,
    name: "MOBILE",
    inStock: true,
    price: 19000
};
var product2 = {
    id: 2,
    name: "LAPTOP",
    inStock: false,
    price: 45000
};
productsArray.push(product1);
productsArray.push(product2);
// productsArray.push({}); // Error This Object is Not Perfect.
console.log(productsArray);
