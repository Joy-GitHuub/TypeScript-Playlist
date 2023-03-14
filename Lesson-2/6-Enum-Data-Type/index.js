// Numeric Enus
var NumericEnum;
(function (NumericEnum) {
    NumericEnum[NumericEnum["North"] = 10] = "North";
    NumericEnum[NumericEnum["East"] = 15] = "East";
    NumericEnum[NumericEnum["South"] = 20] = "South";
    NumericEnum[NumericEnum["West"] = 33] = "West";
})(NumericEnum || (NumericEnum = {}));
;
/* console.log(NumericEnum.South);
console.log(NumericEnum.West); */
var StringEnum;
(function (StringEnum) {
    StringEnum["UserName"] = "JOY BOSE";
    StringEnum["UserHobby"] = "PROGRAMMING";
    StringEnum["UserLocation"] = "GREEN_VIEW";
})(StringEnum || (StringEnum = {}));
;
console.log(StringEnum.UserName);
console.log(StringEnum.UserHobby);
console.log(StringEnum.UserLocation);
