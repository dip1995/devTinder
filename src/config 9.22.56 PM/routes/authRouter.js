const express = require('express');
const User = require('../models/user');
const router = express.Router();
const bcrypt = require('bcrypt');
const { validateSignUpData } = require('../utils/validation');
var jwt = require('jsonwebtoken');

router.post('/signup', async (req,res) => {
  try{
  validateSignUpData(req);
  const { firstName, lastName, email, password } = req.body;
  const hasedpassword = await bcrypt.hash(password, 10);
  const user = new User({
    firstName,
    lastName,
    email,
    password: hasedpassword,
  });

  await user.save();
  res.send('Record Inserted!!')
  }catch(err){
    res.send('Error in Insert Record!!');
  }   
})


router.post('/login',async (req,res) => {
    try {
      const { email,password } = req.body;  
      const user = await User.findOne({ email:email });
      console.log(user)
      if(!user){
        throw new Error("Invalid Credentials");
      }
      const isPasswordValid = await bcrypt.compare(password,user.password);
      console.log(isPasswordValid)
      if(!isPasswordValid){
        throw new Error("Invalid Credentials"); 
      }
      var token = jwt.sign({ _id: user._id }, "DEV@Tinder$790",{ expiresIn: "7d" });
      console.log(token)
      res.cookie("token",token,{
        expires:new Date(Date.now() + 8 * 3600000)
      })
      res.json({message:"Login Success!",user});
    } catch (error) {
      res.send('Error in Login!!');   
    }
})

router.post("/logout", async (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
  });
  res.send("Logout Successful!!");
});



module.exports = router