const express = require("express");
const profileRouter = express.Router();
const { userAuth } = require("../middlewares/auth");
const { validateEditProfileData } = require("../utils/validation");


profileRouter.get("/profile/view",userAuth, async (req, res) => {
  try {
    const user = req.user;
    console.log(user,'diptesh')
    res.send(user);
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

profileRouter.patch('/profile/edit',userAuth, async (req,res) => {
  try {
  if(!validateEditProfileData(req)){
    throw new Error("Invalid Edit Request");
  }  
  console.log(req.body)

  const loggedInUser = req.user;
  Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));
  await loggedInUser.save();
  res.json({
      message: `${loggedInUser.firstName}, your profile updated successfuly`,
      data: loggedInUser,
    });
  } catch (error) {
    res.status(400).send("ERROR : " + error.message); 
  }
})

module.exports = profileRouter;
