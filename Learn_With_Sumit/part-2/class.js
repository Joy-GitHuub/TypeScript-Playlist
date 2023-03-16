var Player = /** @class */ (function () {
    function Player(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    ;
    Player.prototype.play = function () {
        console.log("".concat(this.name, " from ").concat(this.country, " is playing"));
    };
    ;
    return Player;
}());
;
var playersArray = [];
var sakib = new Player("Sakib", 36, "BD");
var mashrafi = new Player("mashrafi", 39, "BD");
playersArray.push(sakib);
playersArray.push(mashrafi);
var myFun;
myFun = function (x) {
    console.log(x);
};
for (var _i = 0, playersArray_1 = playersArray; _i < playersArray_1.length; _i++) {
    var obj = playersArray_1[_i];
    myFun(obj);
}
