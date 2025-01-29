const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://vyasdip1702:vyas%4012345@learningdb.qwj0w.mongodb.net/devTinder')
}

module.exports = connectDB;