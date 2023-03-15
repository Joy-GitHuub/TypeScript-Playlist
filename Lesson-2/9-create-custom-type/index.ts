type Product = {id: number, productName: string,  inStock: boolean, price: number};

let products : Product[];

products = [];

let product1: Product = {
    id: 1,
    productName: "I-Phone",
    inStock: true,
    price: 120000,
};

const product2 : Product = {
    id: 2,
    productName: "SAMSUNG",
    inStock: true,
    price: 22000,
};

products.push(product1);
products.push(product2);

// console.log(products);


type RequestType = "GET_REQUEST" | "POST_REQUEST";

let getRequest : RequestType;

getRequest  ="GET_REQUEST";
// console.log(getRequest);
getRequest = "POST_REQUEST";
// console.log(getRequest);


function requesHandler (requrestType: RequestType){
    console.log(requrestType);
};

requesHandler("GET_REQUEST");