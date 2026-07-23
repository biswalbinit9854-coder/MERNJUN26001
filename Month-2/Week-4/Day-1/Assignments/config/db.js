const mongoose =require("mongoose");

async function connectDb (){
    try{
        const conne=await mongoose.connect (process.env.MONGO_URL);
        console.log("DB CONNECTED")
    }catch(error){
        console.log("FAILED TO CONNECT WITH DB")
    }
}
module.exports=connectDb