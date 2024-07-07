// String and its methods 

// 1. String()
let name = 'Nahid';
const str = String(name);
console.log(str);

// 2. charAt()

const bdDesc = "Bangladesh, to the east of India on the Bay of Bengal, is a South Asian country marked by lush greenery and many waterways. Its Padma (Ganges), Meghna and Jamuna rivers create fertile plains, and travel by boat is common. On the southern coast, the Sundarbans, an enormous mangrove forest shared with Eastern India, is home to the royal Bengal tiger"

let first = 'Mosharof';
let last = 'Hossain';

// console.log(bdDesc.charAt(9));
// console.log(bdDesc.charCodeAt(9));
// console.log(first + ' ' + last);
// console.log(first.concat(last));

console.log(bdDesc.startsWith('east', 19));
// console.log(bdDesc.endsWith('tiger'));
// console.log(bdDesc.includes('east', 20))
// console.log(bdDesc.length);
// console.log(bdDesc.indexOf('royal', 332));
// console.log(bdDesc.lastIndexOf('tiger', 349))

var trime = '   hellow man  ';
// console.log(trime.trimStart())
// console.log(trime.trim());
// console.log(trime);
// console.log(trime.trimEnd());
// console.log(trime.toLowerCase());
// console.log(trime.toUpperCase());

let substr ='Bangladesh to my country';
// console.log(substr);
// console.log(substr.substring(10))
console.log(substr.split(" "));

// console.log(substr.slice());
// console.log(substr.slice(10, 13));

// console.log(substr.search('to'))
// console.log(substr.search(/To/i));

// console.log(substr.replace('my', 'Our'));
console.log(substr.replace(/My/i, 'Our'));
console.log(substr.replace(/My/ig, 'is My'));

console.log(substr.repeat(2))


// class - 34 complate with array methods 

