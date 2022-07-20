//Data Types
let name = "Ajumah" //string
let age = 20 //number
let z = null //null //Object
let y = undefined //undefined //Object
let isMarried = false //Boolean
let favColor = ["white", "green", "red", "orange", "blue", "purple"]

console.log(typeof name);
console.log(typeof age);
console.log(typeof y);
console.log(typeof z);
console.log(typeof isMarried);
console.log(typeof favColor);

//Strings
let x = "Hello World"

console.log(x.toUpperCase());
console.log(x.toLowerCase());
console.log(x.length);

//concatenation
//declare 3 diff variable m,n,p

let m = "I am"
let n = "I go to PWC Bootcamp"
let p = "I love to learn Javascript"

console.log(m + " + name + " + n + " and " + p);

//String literals
console.log(`I am ${age} years old`);

console.error('This is an error')
console.warn('This is a warning')

//Arrays
let fruits = ["orange", "apple", "banana"]
console.log(fruits);

//Array Methods
//push
//pop
//shift
//unshift
fruits.push("grape");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("kiwi");
console.log(fruits);
fruits[0] ="strawberries"
console.log(fruits);

//Object literals
const person = {
    name: "Ajumah", //a property
    age: 20, //a property
    height: 5.8, //a property
    weight: 180, //a property
    isMarried: false, //a property
    greetings: function() { //a function
        console.log('Hello')
    }
}

console.log(person);
console.log(person.isMarried);
