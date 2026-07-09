console.log("Hii")
// Array
let arr= [1,2,3,4,5,6];
arr.push(7,8,9);
console.log(arr)
arr.pop(9)
arr.pop(8)
console.log(arr)

arr.unshift(-1,0);
console.log(arr)
arr.shift()
console.log(arr)

console.log(arr.length)
console.log(arr.concat([12,13,14]));
arr.slice(2,1,36)
console.log(arr)

console.log(arr.join(""));
console.log(arr.toReversed())
console.log(arr);
console.log(arr.sort());

// Function
// types of function
function fun1(){
    console.log("this is named fun ")
}
fun1()

let fun2=function(){
    console.log("this is the expression fun ")
}
fun2()
console.log("type of fun2");

let arrfun=()=>{
    console.log("this is arrow function ")
}
arrfun()

let checkEvenNumber = function(number){
    if (number%2==0){
        console.log(number + "Is even number")
    }
};
checkEvenNumber(25);
checkEvenNumber(89);

// higher order function
function returnvalue(){
    return 50
}
let value = returnvalue();
console.log(value)

function hof(func){
    func()
}
hof(()=>{
    console.log("this is arrow function ")
    
})


// special function of array
// forEach
// map()
// fitter()
// reduce
// sort()

// forEach

let arr1 = [1, 2, 3, 4, 5, 6, 90, 78, 50];
arr1.forEach((v, i) => {
  console.log(v + 2);
});

let updateArr = arr1.map((v, i) => {
  return v * v;
});
console.log(updateArr);

let filteredArr = arr1.filter((v, i) => {
  return v % 2 == 0;
});

console.log(filteredArr)

// let sum=arr1.reduce((accu,curr)=>{
//     return accu+curr
// },0);

// console.log(sum)

let sum = 0; 

for(let v of arr1){
    sum=sum+v;
}
console.log(sum)

let sortArr = arr1.sort((a, b) => b - a);
console.log(sortArr);
