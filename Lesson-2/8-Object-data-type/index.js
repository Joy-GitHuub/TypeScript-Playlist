// Object
/* let user1 : {userId: Number, userName: String, role: String };

user1={userId: 2, userName: "Joy", role: "admin" };
console.log(user1); */
/* let user2: Object;
user2 =  {userId: 3, userName: "Salman", role: "user" }; */
var users;
users = [
    { userId: 2, userName: "Joy", role: "admin" },
    { userId: 5, userName: "amir", role: "user" },
];
for (var key in users) {
    console.log(users[key]["role"]);
}
var car = {
    type: "Toyta",
    mileage: 150,
    condition: true
};
// console.log(car);
