//for Loop
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// for (let i = 2; i < 10; i++) {
//     console.log(i);
// }

// for (let p = 4; p <= 8; p++) {
//     console.log(p);
// }

// for (let j = 12; j <= 19; j++) {
//     console.log(j);
// }

// // while Loop
// let i = 0 
// while (i<20) {
//     console.log(i);
//     i++
// }

//if statement
// const x = 10;
// if (x === 20) {
//     console.log('x is 20')
// } else if (x === 10) {
//     console.log('x is 10');
// } else {
//     console.log('x is not 20 or 10');
// };

// const j = 8;
// if (j > 70) {
//     console.log('Distinction!')
// } else if (j < 70 && j >= 60) {
//     console.log('Very good!');
// } else if (j > 60 && j >= 50) {
//     console.log('Good!');
// } else if (j < 50 && j >= 40) {
//     console.log('Pass!');
// } else {
//     console.log('Fail!');
// }

// how to write a function
// function addNum (a, b) {
//     return a + b
// }

// console.log(subNum(3, 2));

//substraction
// function subNum (a, b) {
//     return a - b
// }

// console.log(subNum(3, 2));


// // division
// function divNum (a, b) {
//     return a / b
// }

// console.log(divNum(3, 2));

// // multiplication
// function mulNum (a, b) {
//     return a * b
// }

// console.log(mulNum(3, 2));

// const addNum = {a, b} => {
//     return a + b
// }

// console.log(addNum);

// const squaredNum = (n) => {
//     return n*n
// }

// console.log(squaredNum(8))

// const numMod = (a) => {
//     return a % 2
// }

// console.log(numMod(5))

// for (let i=0; i<= 20; i+=2) {
//     console.log(i)
// }

// for (let j = 0; j <= 20; j += 3) {
//     console.log(j);
// }

// //split Str to Array
// const a = "Adamu"
// let someWord; 
// someWord = a.split('');
// console.log(someWord);

// // .reverse
// let someArray = ['a', 'b', 'c', 'd', 'e', 'f']
// console.log(someArray.reverse());

// //Array to string
// function strToArr(s) {
//     return s.split('').reverse().join('');
// }

// console.log(s.split().reverse().join());

// isPalindrome
// function isPalindrome (str) {
//     let newString = str.split('').reverse().join('')
//     if (str === newString) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isPalindrome('level'));

// // intPalindrome
// let num15 = "15"

// console.log(parseInt(num15));

// intPalindrome

function intPalindrome (num) {
    let numToStr = num.toString()
    let reverseString = numToStr.split('').reverse().join('')
    if (numToStr === reverseString) {
        return true
    } else {
        return false
    }
}
console.log(intPalindrome(11));

// switch statement

