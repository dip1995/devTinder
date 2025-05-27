const mongoose = require('mongoose');
var validator = require('validator');

const userSchema = new mongoose.Schema({
    firstName : {
        type : 'String',
        require:true,
        minLength:3
    },
    lastName : {
        type : 'String',
        require:true
    },
    email : {
        type : 'String',
        unique:true,
        require:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
              throw new Error("Invalid Email address"+value);
            }
        }
    },
    password : {
        type : 'string',
        require:true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Enter String password "+value);
            }
        }
    },
    age : {
        type: 'Number',
        min : 18
    },
    gender : {
        type : String,
        enum : {
            values : ['male','female','others'],
            message: `{value} is not a gender type`
        }
        // validate(value) {
      //   if (!["male", "female", "others"].includes(value)) {
      //     throw new Error("Gender data is not valid");
      //   }
      // },
    },
    photoUrl: {
      type: String,
      default: "https://geographyandyou.com/images/user-profile.png",
      validate(value) {
        if (!validator.isURL(value)) {
          throw new Error("Invalid Photo URL: " + value);
        }
      },
    },
    about: {
      type: String,
      default: "This is a default about of the user!",
    },
    skills: {
      type: [String],
    },
},{
    timestamps:true
}
)
const User = mongoose.model('User', userSchema);

module.exports = User