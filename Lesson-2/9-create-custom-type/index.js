var products;
products = [];
var product1 = {
    id: 1,
    productName: "I-Phone",
    inStock: true,
    price: 120000
};
var product2 = {
    id: 2,
    productName: "SAMSUNG",
    inStock: true,
    price: 22000
};
products.push(product1);
products.push(product2);
var getRequest;
getRequest = "GET_REQUEST";
// console.log(getRequest);
getRequest = "POST_REQUEST";
// console.log(getRequest);
function requesHandler(requrestType) {
    console.log(requrestType);
}
;
requesHandler("GET_REQUEST");
