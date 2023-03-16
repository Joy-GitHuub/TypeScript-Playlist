//  TypeScript InterFaces

// Interfaces
// Interfaces are similar to type aliases, except they only apply to object types.

interface Rectangle {
    width: number,
    height: number,
};

const rectangle:Rectangle = {
    height :20,
    width: 10,
};
console.log(rectangle);

interface Car{
    type: string,
    year: number,
    model: string,
    condition: boolean, 
};
const car:Car = {
    type: 'Frod',
    year: 2009,
    model: "Corolla",
    condition: true, 
};
console.log(car);