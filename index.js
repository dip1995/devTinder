const express = require('express');
const connectDB = require('./src/config 9.22.56 PM/config/database');
const authRouter = require('./src/config 9.22.56 PM/routes/authRouter');
const profileRouter = require('./src/config 9.22.56 PM/routes/profile');
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use('/',authRouter);
app.use('/',profileRouter);


connectDB().then(() => {
    console.log('Database Connected!') 
    app.listen(3000,() => {
    console.log('Server start at port 3000')   
    })
}).catch(() => {
    console.log('Database not Connected!') 
})



