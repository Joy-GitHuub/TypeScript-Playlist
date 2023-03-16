// TypeScript Class
var User = /** @class */ (function () {
    function User(name, age) {
        this.userName = name;
        this.userAge = age;
    }
    ;
    User.prototype.display = function () {
        console.log("username: ".concat(this.userName, ", userage: ").concat(this.userAge));
    };
    return User;
}());
;
// Class Object
var user1 = new User("Joy Bose", 20);
user1.display();
// console.log(user1.userAge); // Accessable
// console.log(user1.userName); // Not Access
