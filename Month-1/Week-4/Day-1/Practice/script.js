console.log("BINIT")
// Loop Statement

// for
// while
// do while
// for in
// for of

// for loop
// for(initalization;Condion;updation)
//     statement
//     }

for( let i=2;i<=5;i++){
    console.log("BINIT BISWAL");
}

// while
let A=2
while(A<=6){
console.log("TATA")
A++;
}

// do while
let s=4;
do{
    console.log("MKL");
    s++;
}while(s<=10)

// for in 
let obj={
    name:"binit",
    class:9,
    section:A,
}
for(let key in obj){
    console.log(obj.key)
}
let arr=[1,2,3,4,5];
for(let i in arr){
    console.log(i,arr.i)
}
for(let i in obj){
    console.log(i)
}
// string
let std1="student1"
let std2="student2"
let std3="student3"
 console.log(std1[0]);
 for(let v of std1){
    console.log(v)
 }

 std1:"BB";
 std1[0]="p";
 console.log(std1);
 let str="Soo Whatt"
 console.log(str.length);

 console.log(str.toUpperCase())
 console.log(str.toLowerCase())
 console.log(str.replace("S","d"));
 
 console.log(str.replaceAll("t","o"));

 console.log(str.slice(-2,-1));

 console.log(str.trim().length)
 console.log(str.split("t"))