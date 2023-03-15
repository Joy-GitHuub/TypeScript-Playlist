// Function Singnature
var userInfo1;
var userInfo2;
var main;
// userInfo1= () => {
//     return("Joy Bose is 21 Year Old");
// };
// userInfo1();
// main =() => {
//     console.log(`Call`);
// };
// main("Joy")
userInfo2 = function (name, age) {
    return "My name is ".concat(name, " and I am ").concat(age, " year old");
};
var x = userInfo2("Joy Bose", 21);
console.log(x);
