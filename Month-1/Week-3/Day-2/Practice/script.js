console.log("Hello World");

// let
// declarre at global level

let a=88;
console.log(a)


// block level
{
    let b=777;
    console.log(b)

}
// console.log(b)
function hii(){
    let v=21;
    console.log(v)
}
// console.log(v)
hii()

// const

// global

const v=24;

// block

{
    const v=56;
    console.log(v)
}

function hello(){
    const p=40;
    console.log(p)
}
// console.log(p)
hii()

// the way of declaration 
// let
let num
console.log(num)

num=36;
console.log(num);

let num1=16;
console.log(num1) 

// let num;
// console.log(num)

num=96;
console.log(num);

// const

const M=37;
console.log(M)


// Data type
// Primitive (number,string,symbol,undefined,null,boolean,bigint)
// Non-Primitive (array,object)

let number=6;
console.log(typeof number)

let name="SB";
console.log(typeof name)

let Z=Symbol("&");
console.log(typeof Z);

let u=undefined;
console.log(u);

let o=null;
console.log(typeof o);

let ispassed=true;
console.log(typeof ispassed);

let bigvalue=BigInt("2973197354925552221035");
console.log(typeof bigvalue);

// non primitive
// Array

let arr=[1,2,3,4,5,6,true,"SSS",[]];
console.log(arr);

let arr1=new Array(4,3);
console.log(arr1)

console.log(arr[8])

// Object
let obj={
    name:"BINIT",
    age:19,
};
console.log(obj.age);
console.log(obj["name"]);

let obj1 = new Object({
  email: "hii@gmail.com",
});
console.log(obj1.email);

// operator
// types
// Arithmatic
// Assignment
// Comparision
// logical

// + , - ,* ,/ , % , ** , ++ , --
console.log(2 + 1);
console.log(5 - 2);
console.log(4 * 3);
console.log(4 / 2);

console.log(5 % 2);
console.log(3 ** 2);

let i = 3;
console.log(i++);
// 4

console.log(++i)


// Assignment

let king="Ram";

let add=i+4;
console.log(add)

let numb=2;
// numb=numb+5;
numb+=5
console.log(numb)
