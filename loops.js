// loops practice- There are 5 loops method  in js 
// 1. for, 
// 2. while loop, 
// 3. do while , 
// 4. for in -  use case only object 
// 5. for of loop - use case only array 


// post increment - ( x++ ), preincrement- (++x)

// for loop 

for(let i = 1; i <= 5; i++){
    // console.log(i)
    // console.log('this is normal for loop')
}

// while looop

let i = 0;
while(i <= 5){
    // console.log('this is while loop')
    // console.log(i)
    i++;
}

// do while loop 

let x = 100;
do{
    console.log(x)
    x++;
}
while(x <= 50)
   

// for of loop

let fruits = ['Apple', 'Banana', 'PianApple', 'jackfruits', 'Grasp'];

for(let fruit of fruits){
    // console.log(fruit);

}

// for in loop 

let person = {
    name : 'Mosharof Hossain',
    age : 23,
    occupation : 'Programmer',
    home : "Bowla"

}

for(let key in person){
    console.log(`${key} : ${person[key]}`)
}