// Array and its Methods 

// const arr = ['bd', 'eng', 'ind'];
// const conarr = Array('hi','jay')
// console.log(conarr);

// const fruits = 100 //['Apple', 'Mango'];

// console.log(fruits instanceof Array);

// instanceOf
/* if(fruits instanceof Array){
    for(let fruit of fruits){
    console.log(fruit)
}
}
else{
    console.log('ohh, its not an array');

} */

// Array.isArray
/* if(Array.isArray(fruits)){
    for(let fruit of fruits){
        console.log(fruit)
    }
}else{
    console.log('ohh, its not a array ')
} */


// arrayName[index];

// const fruits = ['apple', 'mango', 'orange', 'bedena']

// fruits[2] = 'komola'
// console.log(fruits)

// fruits[10] = 'jackfruits';
// console.log(fruits);

// array.toString()
// console.log(fruits.toString())

// arrayName.join(separator)
// console.log(fruits.join('/'))

// push()
// fruits.push('Acher', 'somoca', 'brinjals')
// console.log(fruits)

// pop()
// fruits.pop()
// console.log(fruits)

// const fruits = ['apple', 'mango', 'orange', 'bedena']

// shift()
// fruits.shift()
// console.log(fruits.shift())
// console.log(fruits)

// unshift()
// fruits.unshift('kola')
// console.log(fruits.unshift('den'))
// console.log(fruits)


// const fruits = ['apple', 'mango', 'orange', 'bedena', 'cadera', 'ledara']

// array.splice() // arrar elment jekuno jaiga teke remove and add kora jai 
// console.log(fruits)
// console.log(fruits.splice(1, 2, 'joy bangla', 'sunar bangla '))
// console.log(fruits)

// array.slice(); array element copy kore neya jai and return kore new array 
// console.log(fruits)
// console.log(fruits.slice(1))

// const fruits = ['apple', 'mango', 'orange', 'bedena', 'cedera', 'ledera']


// array iteration methods 

// array.sort()
// console.log(fruits)
// console.log(fruits.sort())

// const newarr = fruits.sort()
// console.log(newarr == fruits);


// callback function explain 

/* function add(m,n,line, myFunc){
   (myFunc(line))
    return m + n;
}

const r = add(2, 3,101, function(line){
    console.log('called from line ' + line)
    
})

console.log(r) */
// call back function use add, sub, mul, division, Modulus
/* function multiFucn(num1, num2, newFunc){
    const r = newFunc(num1, num2);
    return r;
}
const add = multiFucn(5,6, function(n1,n2){
    return n1 + n2;
})
console.log(add)

const sub = multiFucn(6, 2, function(n1, n2){
    return n1 - n2;
})
console.log(sub) */

const marks = [89, 79, 69,-900, 55, 90, 74, -54, 33, 87, -45];
const fruits = ['Apple', 'mango', 'orange', 'bedena', 'cedera', 'ledera', 'Zebra']

marks.sort();
// console.log(marks);

console.log(fruits.sort())


// class - 35 closed // refarence class-36 Number


const sortMarks = marks.sort(function(a,b){
    // return a - b;
    // return b - a
    if(a < b){
        return -1;
    }
    else if(a > b){
        return 1;
    }
    else{
        return 0;
    }
})

console.log(sortMarks)

const sortFruits = fruits.sort((a,b)=>{
    a = a.toLowerCase();
    b = b.toLowerCase();

    if(a < b){
        return -1;
    }
    else if(a > b){
        return 1;
    }
    else{
        return 0
    }
})
console.log(sortFruits);


// class - 36 closed 
