// Object

/* let user1 : {userId: Number, userName: String, role: String };

user1={userId: 2, userName: "Joy", role: "admin" };
console.log(user1); */

/* let user2: Object;
user2 =  {userId: 3, userName: "Salman", role: "user" }; */


let users: object[];
users = [
    {userId: 2, userName: "Joy", role: "admin" },
    {userId: 5, userName: "amir", role: "user" },
];

for (const key in users) {
    console.log(users[key]["role"]);
}


const car : {type: string, mileage: number, condition: boolean} ={
    type: "Toyta",
    mileage: 150,
    condition: true,
};
// console.log(car);
