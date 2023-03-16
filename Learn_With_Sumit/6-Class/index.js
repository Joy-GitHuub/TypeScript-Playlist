// TypeScript Null & Undefined
var value = null;
value = "Undefined Null";
value = undefined;
// console.log(value);
// With-Out Interface
var users = [];
var user1 = {
    id: 1,
    name: "Mr. Potato",
    age: 32
};
var user2 = { id: 2, name: "Ms. Tomato", age: 21 };
users.push(user1);
users.push(user2);
// console.log(users);
var printUserInfo = function (user) {
    console.log("userid => ".concat(user.id, ", name = ").concat(user.name, ", age = ").concat(user.age));
};
users.forEach(function (user) { return printUserInfo(user); });
