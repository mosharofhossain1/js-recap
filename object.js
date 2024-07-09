// Object explain 

// Object literal and constructor 

const person = {
    name :'Mosharof',
    age : 23,
    address:{
        distric : 'Mymensing',
        thana : 'Phulpur',
        village : 'Bowla'
    },
    hobbies : ['football', 'watch dirilis artugrul']
}
// how to access object property

// console.log(person.hobbies);
// console.log(person.address.village);
person.address.village = 'Bowla kandapara'
console.log(person['age'])
console.log(person.hobbies[1]);
console.log(person.address.village)

// add or move property in object 

person.relesion = 'Abc';
console.log(person)
person['area'] = '10 no Bowla'
console.log(person)

person.address.postOffice = 'kazi Bari'
console.log(person)
person.address['postCode'] = 2410;
console.log(person);

person.hobbies.splice(0,1, 'programming');
console.log(person)

// comparing  object 
// const obj1 = {
//     a : 10
// }
// const obj2 = {
//     a : 10
// }
// console.log(obj1 === obj2)

// for in loop only used by object

/* const product = {
    id: 10,
    name: 'Blender',
    category: 'Home Appliances',
    price: 49.99,
    stock: 40,
    rating: 4.4,
    description: 'High-power blender with multiple speed settings and a 1.5L jar.',
    print : function(){
        console.log('hello')
    }
} */

// for(let key in product){
//     console.log(`${key}:${product[key]}`)
// }

// object Keys, Values , entries 
/* const keys = Object.keys(product);
console.log(keys)
const values = Object.values(product);
console.log(values);
const entitis = Object.entries(product);
console.log(entitis); */

// object.assign()

const obj1 = {
    a : 10
}
const obj2 = {
    b : 20
}
const newObject = Object.assign({},obj1,obj2);
console.log(newObject);

// This keyword

const product = {
    id: 10,
    name: 'Blender',
    category: 'Home Appliances',
    price: 49.99,
    stock: 40,
    rating: 4.4,
    description: 'High-power blender with multiple speed settings and a 1.5L jar.',
    print : function(){
        // console.log(product.name)
        console.log(this.name)
    }
}
product.print();

// class -39 finished 