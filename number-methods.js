// Number and its methods 
// 1. Number constactor 
let num = Number(100);
console.log(num)
let num2 = 234;
console.log(num2);

// 2. Number.isFinite()
const inf = Infinity;
console.log(typeof inf);

// 3. Number.isInteger()
let num3 = 5656;
// console.log(Number.isInteger(num3))
let num4 = 5.673;
// console.log(Number.isInteger(num4))

// 4. Number.isNaN()
let num5 = Number(34343);
console.log(Number.isNaN(num5));
let num6 = Number('76794345we');
console.log(Number.isNaN(num6));

// 5. Number.toFixed()
let num7 = 7.877564;
console.log(num7.toFixed(3));


// 6. Number.toPrecision
let num8 = 9.6574;
console.log(num8.toPrecision(4));

// 7. Number.toString()
let num9 = 7675;
console.log(num9.toString());

// Global function methods 
// 8. parseInt()
let x = 3.47853;
console.log(parseInt(x));

let x1 = 67843;
console.log(parseFloat(x1))
// 9. parseFloat()

