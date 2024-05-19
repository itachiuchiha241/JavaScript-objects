// Primitives data types

const auther = "Prem";

let a = "Null";
let b = 10;
let c = "Prem"
let d = BigInt(10) + BigInt(10)
let e = true;
let f = Symbol("I am a nice symbol")
let g
console.log(a, b, c, d, e, f, g)
console.log(typeof b)



// Non Primitives data types name as Objects

const item = {
    "Prem" : true,
    "Vaibhav" : false,
    "swaraj" : 78,
    "Ritesh" : true,

}
console.log(item["swaraj"])



// This is just a example code

const item1 = {
    "name" : "Prem",
    "salary" : 75000,
    "age" : 21,
    "address" : "New Mumbai, New Panvel",
    "isMarried" : false,
    "Work" : "Freeliencing",

}
console.log(item1)


const item2 = {
    "name" : "Vaibhav",
    "salary" : 85000,
    "age" : 21,
    "address" : "New Mumbai, New Panvel",
    "isMarried" : false,
    "Work" : "Freeliencing",

}
console.log(item2)

console.log(item1 , item2) // It will give you both data of object