// TypeScript Type Aliases and Interfaces

// TypeScript allows types to be defined separately from the variables that use them.
// Aliases and Interfaces allows types to be easily shared between different variables/objects.


// Type Aliases
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car ={
    type: CarType,
    year: CarYear,
    model: CarModel,
};

const car: Car={
    type: "Tyota",
    model: "Corolla",
    year: 2001,
};

const car2:Car = {
    type: "Frod",
    model: "Corolla",
    year: 2009,
}
console.log(car);
console.log(car2);



type Product = {
    id: number,
    name: string,
    inStock: boolean,
    price: number,
};
const productsArray: Product[] = [];

const product1: Product= {
    id: 1,
    name: "MOBILE",
    inStock: true,
    price: 19000,
};
const product2: Product= {
    id: 2,
    name: "LAPTOP",
    inStock: false,
    price: 45000,
};
productsArray.push(product1);
productsArray.push(product2);
// productsArray.push({}); // Error This Object is Not Perfect.
console.log(productsArray);
