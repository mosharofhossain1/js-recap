// js OPerators 
// 1. Assignment operator :- =, +=, -=, /=, *=, **=,  %=
// 2. Arithmetice operator :- +, -, *, /, %, **, ++, --;
// 3. Comparitive operator :- ==, !=, ===, !==, >, <, >=, <=,
// 4. Logical Operator :- &&, ||, !

/* 1. Assignment operator explain */
let x = 6;
// x += 5;
// x -= 2;
// x *= 2
// x /= 2;
// x **= 2;
x %= 2;
console.log(x)

/* 2. Aritematice operator explain */

let num1 = 20;
let num2 = 3;
// let result = num1 + num2;
// let result = num1 - num2;
// let result = num1 * num2;
// let result = num1 / num2;
// let result = num1 % num2;
// let result = num1 ** num2;
// num1++;
num1--,
console.log(num1)
// console.log(result);


/* 3. Comparative operator  */

let a = 9;
let b = 6;
// let result = a == b;  console.log(a == b);
// let result = a === b; console.log(a === b)
// let result = a != b;   console.log(a != b)
// let result = a !== b;  console.log(a !== b)
// let result = a > b;    console.log(a > b)
// let result = a < b;    console.log(a < b)
// let result = a >= b;   console.log(a >= b)
// let result = a <= b;      console.log(a <= b)

// console.log(result);


/* 4. Logical Operator  */

if(a == b && a > b){
    console.log('Both condition is true')
}
else{
    console.log('At least one conditionis false')
}

if(a < b || a > b){
    console.log("Both condition is true")
}
else{
    console.log('At least condition is false')
}

if(!(a == b)){
    console.log(true)
}
else{
    console.log(false)
}

