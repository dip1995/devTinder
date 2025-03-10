const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName : {
        type : 'String'
    },
    lastName : {
        type : 'String'
    },
    email : {
        type : 'String'
    },
    password : {
        type : 'string'
    }
})
const User = mongoose.model('User', userSchema);

module.exports = User