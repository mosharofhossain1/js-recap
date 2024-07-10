// Function Practice 

// Normal Function declear 

function myFunc(msg){
    console.log(msg)
}

myFunc('Normal Function Declear');
myFunc('this is test by normal function');

// Annonimas Function

const annoFunc = function(){
    console.log(annoFunc);
}
annoFunc('this annonimas function')


// arrow Function

const arrowFunc = ()=>{
    console.log(arrowFunc)
}
arrowFunc('this is arrowfunce');


// perameter, argument, argument object 

/* const add = (a,b)=>{
    console.log(a + b);
}

add(2,4); */

// Return from a function 
const add = (a,b)=>{
    return a + b;
}

const r = add(2,3);
console.log(r);

// Spred operator 

const arr = [1,2,4,6,8,9];
const arr2 = [...arr];  // spred operator 
arr2.pop()
console.log(arr);

// arguments objects

function some(){
    const argus = [...arguments];
    const r = argus.reduce((a,b)=>{
        return a + b;
    },0)
    // const r = argus.reduce((a,b)=> a+b, 0) // callbackFunc er only single statement return  shortcut 
    return r;
}

const result = some(2,3,4,5,6,79,10);
console.log(result);

// Nested function declear 

function Nested(){
    function add(args){
        return [...args].reduce((a,b)=> a + b, 0)
    }
    const value = add(arguments);
    return value;
    
}

const NestedResult = Nested(2,3,4,5,8,5);
console.log(NestedResult);

// callback function 

function simple(a,b, callback){
    const callbackFunc = callback(a,b)
    return callbackFunc;
}

const simpleValue = simple(2,3, function(x,y){
    return x + y
})

console.log(simpleValue);

// Recersive function 

const factorial = (n)=>{
    if(n === 1){
        return 1
    }
    else{
        return n * factorial(n-1)
    }
}

console.log(factorial(5))