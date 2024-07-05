/* Js Data Types Describes  */
// How Many Datatypes in js Programming Leanguage - There are 2 types data type in js programming language 
// 1. Primitive Data Type 
// 2. Object Data type 

/* ==== Primitive Data types
    1. Number Type 
    2. String type
    3. Boolean 
    4. Null
    5. Undifined 
    6. NaN
*/

let number = 4545;
let myName = 'Mosharof Hossain';
let isMarid = false;
let noValue = null;
let undif;
let nan = NaN;

/* ======= Object type data types
    1. Array
    2. Object
    3. function
    4. typeof
*/

let fruits = ['Apple', 'Banana', 'Orange', 'PinaApple', 'Jackfruits'];



let laptopsInfos = {
    name : 'Hp',
    ram : '8gb',
    procesor : 'CoreI3',
    inputs : ['keyboard', 'Mouse','CataCable']
}
// console.log(laptopsInfos)
let extra = 'inputs';
console.log(laptopsInfos[extra]);

function test(){
    console.log('test function')
}
test();


// Simple Object Method 

let countryDetails = {
    name : 'Bangladesh',
    currence : "BDT",
    Capital : "Dhaka",
    status : function(){
        console.log('Bangladesh is Independent Country');
    }
}

countryDetails.status();
