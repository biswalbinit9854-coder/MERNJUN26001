const jwt = require("jsonwebtoken");
const User = require("../../Practice/models/userModel");

exports.protect = async(req,res ,next)=>{
    try {
        const token = req.headers.authorization;

        if(!token){
            return res.status(500)
            .json({success:"false",message:"KINDLY SEND THE TOKEN"});
        }
        const {userid}=await jwt.verify (token,process.env.SECRET_KEY);

        const existingUser = await User.findById(userid).select("-password");

        if(!existingUser){
            return res .status(404).json({success:false,message:"INVALID TOKEN"});
        }
        next()


    } catch (error) {
        return res .status(500).json ({success:false,message:"FAILED TO VERIFY TOKEN"})
    }
};