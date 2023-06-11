// let fname = "Ravi";
// fname = 'singh'
// console.log(fname);
//  var name = 'Ravi';
// const name = 'Ravi';
//  name = 'singh'
//  console.log(fname)

// function myname(love){
//     if(love){
//         let name = 'Riju';
//         const fname = ' singh'
//     }
//     console.log('my name is ' + name +" " + fname)
// }

// myname(true)
// function myname(love){
//     if(love){
//         var name = 'Riju';
//         var fname = ' singh'
//     }
//     console.log('my name is ' + name +" " + fname)
// }
// myname(true)

// * Array destructuring
// const programming = ['js','php','c++','python','java']
// let [top1,top2,top3,top4,top5] = programming;
// console.log("My fav prog lang is " +  top2)
// console.log(programming.length)
// let [top1,,,,toplast] = programming
// console.log(`My fav prog lang is ${top1} and my least fav is ${toplast} `)

// *
// let a = 4;
// let b = 6;
// [a,b] = [b,a]
// console.log(`the value of a is ${a} and the value of b is ${b}`)

// * object destructuring
// const myObj ={
//     name:'Riju',
//     age:34,
//     deg:'codding',
//     hobb:{
//         first:'playing',
//         sec:'tfr'
//     }
// }
// let {name:myname,age:ages,deg,hobb }= myObj
// console.log(`my name is ${myname} i love  making ${hobb.first}`)

// **default parameters
// function mult(a,b=9){
//     console.log(a*b)
// }
// mult(4)
// const mult=(a,b=8)=>{
//     console.log(a*b)

// }
// mult(3)

// *Rest parameter
// function sum(...inputs){
//     console.log(...inputs)
//     let total = 0;
//     for(let i of inputs){
//         total +=i;
//     }
//     console.log(total)
// }
// sum(1,2,3,4,5,6,8,9,5)

// ** spread operator
// function sum(a,b,c){
//     console.log(a+b+c)
// }
// var arrVal = [4,5,6]
// sum(...arrVal)

// repalce concat
// arr1 = [1,2,4,5,76];
// arr2 = [2,4,5,7,8];
//  arr1   = [...arr1,...arr2];
// console.log(arr1)

// replace copy
// arr1 = [1,2,3,4];
// arr2 = arr1;
// console.log(arr2)

// **math Object
// let number = -5.5556
// console.log(Math.sign(number))
// console.log(Math.trunc(number))
// console.log(Math.floor(number))
// let a = 5;
// let b = 2**a;
// console.log(b)

// **New Number & global method
// let num =' 1,3,5,7,9,0,4';
let num = 98;
// console.log(Number.isFinite(num))
// console.log(Number.isNaN(num))
console.log(Number.isInteger(num))