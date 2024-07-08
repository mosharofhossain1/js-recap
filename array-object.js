let products = [
    {
        id: 1,
        name: 'Smartphone',
        category: 'Electronics',
        price: 299.99,
        stock: 45,
        rating: 4.5,
        description: 'A high-end smartphone with 64GB storage and excellent camera.'
    },
    {
        id: 2,
        name: 'Laptop',
        category: 'Electronics',
        price: 899.99,
        stock: 30,
        rating: 4.8,
        description: 'A powerful laptop with 16GB RAM and 512GB SSD for professional use.'
    },
    {
        id: 3,
        name: 'Headphones',
        category: 'Accessories',
        price: 49.99,
        stock: 100,
        rating: 4.2,
        description: 'Noise-cancelling over-ear headphones with high-quality sound.'
    },
    {
        id: 4,
        name: 'Coffee Maker',
        category: 'Home Appliances',
        price: 79.99,
        stock: 25,
        rating: 4.7,
        description: 'Automatic coffee maker with programmable settings and a thermal carafe.'
    },
    {
        id: 5,
        name: 'Running Shoes',
        category: 'Footwear',
        price: 59.99,
        stock: 0,
        rating: 4.6,
        description: 'Lightweight running shoes with breathable mesh and cushioned soles.'
    },
    {
        id: 6,
        name: 'Electric Kettle',
        category: 'Home Appliances',
        price: 29.99,
        stock: 50,
        rating: 4.3,
        description: '1.5L electric kettle with fast boiling and auto shut-off feature.'
    },
    {
        id: 7,
        name: 'Tablet',
        category: 'Electronics',
        price: 199.99,
        stock: 35,
        rating: 4.4,
        description: '10-inch tablet with 64GB storage and 4G connectivity.'
    },
    {
        id: 8,
        name: 'Backpack',
        category: 'Accessories',
        price: 39.99,
        stock: 60,
        rating: 4.5,
        description: 'Durable and water-resistant backpack with multiple compartments.'
    },
    {
        id: 9,
        name: 'Gaming Console',
        category: 'Electronics',
        price: 399.99,
        stock: 20,
        rating: 4.9,
        description: 'Next-gen gaming console with 1TB storage and 4K gaming support.'
    },
    {
        id: 10,
        name: 'Blender',
        category: 'Home Appliances',
        price: 49.99,
        stock: 40,
        rating: 4.4,
        description: 'High-power blender with multiple speed settings and a 1.5L jar.'
    }
];

// array.find()

// console.log(products);
/* const productFilter = products.filter(function(product){
    if(product.price < 100){
        return true;
    }
}).sort(function(a,b){
    if(a.name < b.name){
        return -1
    }
    else if(a.name > b.name){
        return 1
    }
    else{
        return 0;
    }
}).reverse()

console.log(productFilter); */


// arrayName.find()
const findProducts = products.find(function(product){
    if(product.price < 100){
        return true; 
    }
})

console.log(findProducts);

const fruits = ['Apple', 'mango', 'orange', 'bedena', 'cedera', 'ledera','bedena', 'Zebra','mango']

const filterFruits = fruits.filter(function(fruit){
    if(fruit === 'bedena'){
        return true;
    }
    else if(fruit === 'mango'){
        return true;
    }
})
console.log(filterFruits);
const findFruits = fruits.find(function(fruit){
    if(fruit === 'bedena'){
        return true;
    }
})
console.log(findFruits);

// arrayName.some()
const somePrducts = products.some(function(product){
    if(product.price < 100){
        return true
    }
    else{
        return false;
    }
})
console.log(somePrducts)
// arrayName.every()
const everyPrducts = products.every(function(product){
    if(product.stock){
        return true
    }
    else{
        return false;
    }
})
console.log(everyPrducts)

// arrayName.findIndex()

const findindexProducts = products.findIndex(function(product){
    return product.price < 50;
})
console.log(findindexProducts);