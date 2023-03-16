// TypeScript Enums
// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric. Lets start with numeric.
/* Numeric Enums - Default

By default, enums will initialize the first value to 0 and add 1 to each additional value: */
var NumericEnum;
(function (NumericEnum) {
    NumericEnum[NumericEnum["North"] = 0] = "North";
    NumericEnum[NumericEnum["East"] = 1] = "East";
    NumericEnum[NumericEnum["South"] = 55] = "South";
    NumericEnum[NumericEnum["West"] = 56] = "West";
})(NumericEnum || (NumericEnum = {}));
;
console.log(NumericEnum);
console.log(NumericEnum.West);
// NumericEnum.East = 33; //Error Because enum is a Just ReadOnly Property;
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
;
console.log(StatusCodes);
/* String Enums
Enums can also contain strings. This is more common than numeric enums, because of their readability and intent. */
var StringEnum;
(function (StringEnum) {
    StringEnum["North"] = "North";
    StringEnum["East"] = "East";
    StringEnum["South"] = "South";
    StringEnum["West"] = "West";
})(StringEnum || (StringEnum = {}));
;
console.log(StringEnum);
var numericStringEnum;
(function (numericStringEnum) {
    numericStringEnum[numericStringEnum["population"] = 0] = "population";
    numericStringEnum[numericStringEnum["age"] = 21] = "age";
    numericStringEnum["name"] = "Joy";
    // hobby, //Error
    numericStringEnum["city"] = "Chittagong";
    numericStringEnum[numericStringEnum["distance"] = 4444] = "distance";
    // isPass = false, // boolean not Assign..
})(numericStringEnum || (numericStringEnum = {}));
;
console.log(numericStringEnum);
