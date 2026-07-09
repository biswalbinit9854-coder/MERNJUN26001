console.log("Hello World")
a=30;
console.log(a);
A=99;
console.log(A);
_=21;
console.log(_);
$=24;
console.log($);
full_name="Hii";
console.log(full_name);

// var let const
// scope
// global
// function
// block

// declare at global level 
var a=43;
console.log(a);

// declare at block level;
{
    var b=24;
    console.log("block level access",b);
}

console.log("outside the block",b);

// declare at function level

function getV(){
    var d=55;
    console.log(d);
}
// console.log(d);
getV()


// the way of declaration
var num=66;
console.log(num);

num=40;
console.log(num);

var num1=58;
console.log(num1);