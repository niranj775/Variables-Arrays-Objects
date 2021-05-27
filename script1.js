console.log("hello world");
var a, b, c, d;
console.log(a, b, c, d);

var myvar = 1;
console.log(myvar);

var firstName;
var lastName;
var maritalStatus;
var country;
var age;
console.log(firstName, lastName, maritalStatus, country, age);

var firstName, lastName, maritalStatus, country, age;
console.log(firstName, lastName, maritalStatus, country, age);

var str = "I'm 26 years old";
var str2 = "You're 36 years old";
var bool = str === str2;
console.log(str, str2, bool);
var nothing = null;
console.log(nothing);
var undefined;
console.log("Udefined: " + undefined);

var a = "5";
console.log("Before Parsing: " + a, typeof a);
var a = parseInt(a);
console.log("After Parsing: " + a, typeof a);
console.log(Number("123"));
var a = "15";
console.log("Before +: " + a, typeof a);
console.log(`After +: ${a}, ${typeof a}`);

if (true) console.log("true");
if ({}) console.log("true");
if ([]) console.log("true");
if (42) console.log("true");
if ("0") console.log("true");
if ("false") console.log("true");
if (new Date()) console.log("true");
if (-42) console.log("true");
if (12n) console.log("true");
if (3.14) console.log("true");
if (-3.14) console.log("true");
if (Infinity) console.log("true");
if (-Infinity) console.log("true");

if (false) console.log("1");
else console.log("0");
if (0) console.log("1");
else console.log("0");
if (-0) console.log("1");
else console.log("0");
if (0n) console.log("1");
else console.log("0");
if ("") console.log("1");
else console.log("0");
if (null) console.log("1");
else console.log("0");
if (undefined) console.log("1");
else console.log("0");
if (NaN) console.log("1");
else console.log("0");

/*
Task 1: Simple Programs todo for variables

1. Declare four variables without assigning values and print them in console

2. How to get value of the variable myvar as output
    var myvar= 1;
    console.log("myvar");

3. Declare variables to store your first name, last name, marital status, country and age in multiple lines

4. Declare variables to store your first name, last name, marital status, country and age in a single line

5. Declare variables and assign string, boolean, undefined and null data types
    I am 25 years old. 
    You are 30 years old.

6. Convert the string to integer

    parseInt()
    Number()
    Plus sign(+)

7. Write 6 statement which provide truthy & falsey values.
*/
