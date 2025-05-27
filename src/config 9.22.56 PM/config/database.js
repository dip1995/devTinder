const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://vyasdip1702:diptesh@learningdb.qwj0w.mongodb.net/devTinder')
}

module.exports = connectDB;