const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt =require("jsonwebtoken")

exports.createUser = async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    const { fullName, age, email, password,phone } = req.body;
console.log({
      fullName,
      age,
      email,
      password,
      phone,
    });
    if (!fullName || !age || !email || !password || !phone ) {
      return res
        .status(400)
        .json({ success: false, message: "KINDLY FILL ALL THE FIELD" });
    }

    bcrypt.hash(password, 10, async function (err, hash) {
      const user = new User({ fullName, age, email, password: hash,phone });
      await user.save();

      return res
        .status(201)
        .json({ success:true, message:"successfully created" });
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success:false, message:"FAILED TO CREATE" });
  }
};
exports.loginUser = async(req,res)=>{
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
      .status(500)
      .json({success:false ,message:"KINDLY FILL ALL THE FIELD"})
  } 
  const existingUser =await User.findOne({email});

  if (existingUser){
    bcrypt.compare(
      password,existingUser.password,
      async function (err,result) {
      if (result === true){
        let token = await jwt.sign(
          {
            userId: existingUser._id,
          },
          process.env.SECRET_KEY,
          {expiresIn:"1h"},
        );
        return res
        .status(200) 
        .json({success:false,message:"LOGIN SUCCESS", token}); 
      }  else {
      return res
      .status(404) 
      .json({success:false,message:"INVALID PASSWORD"}); 
    }
  },
);
}else{
return res
.status(404) 
.json({success:false,message:"INVALID E-MAIL"}); 
}
}
  catch (error) {
       return res
      .status(500)
      .json({ success: false, message: "FAILED TO CREATE" });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    // res.send("get requrest called",users);
    res.json({ message: "successfully fetched", users });
  } catch (error) {
    res.json({ message: "failed to fetch", error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const updateUser = await User.findByIdAndUpdate(id, data);

    res.json({ message: "successfully user updated" });
  } catch (error) {
    res.json({ message: "failed to update" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.findByIdAndDelete(id);
    res.json({ message: "delete successfull" });
  } catch (error) {
    res.json({ message: "failed to delete" });
  }
};