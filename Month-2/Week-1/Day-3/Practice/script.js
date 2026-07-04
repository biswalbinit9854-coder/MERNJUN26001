console.log("Hello, World!");   

let promise=new Promise((resolve, reject)=>{
    resolve("Promise resolved!")
    // reject("Promise rejected!")
})
// console.log(promise)

promise.then(()=>{
    console.log("Promise resolved!")
}).catch(()=>{
    console.log("catch block")
})

let ol=document.querySelector("ol")


async function getData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data=await response.json()

    for(let obj of data){
        let li=document.createElement("li");
        li.innerText=obj.title;
        ol.append(li)
    }
   
}
   getData()