// TypeScript Enums

// An enum is a special "class" that represents a group of constants (unchangeable variables).

// Enums come in two flavors string and numeric. Lets start with numeric.


/* Numeric Enums - Default

By default, enums will initialize the first value to 0 and add 1 to each additional value: */

enum NumericEnum{
    North,
    East,
    South= 55,
    West,
};
console.log(NumericEnum);
console.log(NumericEnum.West);

// NumericEnum.East = 33; //Error Because enum is a Just ReadOnly Property;


enum StatusCodes{
    NotFound = 404,
    Success= 200,
    Accepted = 202,
    BadRequest = 400,
};
console.log(StatusCodes);

/* String Enums
Enums can also contain strings. This is more common than numeric enums, because of their readability and intent. */

enum StringEnum{
    North = "North",
    East = "East",
    South = "South",
    West = "West",
};
console.log(StringEnum);


enum numericStringEnum{
    population,
    age = 21,
    name = "Joy",
    // hobby, //Error
    city = "Chittagong",
    distance = 4444,
    // isPass = false, // boolean not Assign..
};
console.log(numericStringEnum);
