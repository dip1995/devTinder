const express = require('express');
const connectDB = require('./src/config 9.22.56 PM/config/database');
const app = express();

const User = require('./src/config 9.22.56 PM/models/user');

app.use(express.json());

app.post('/user', async (req,res) => {
  console.log(req.body)
  const user = new User(req.body);
  try{
    await user.save();
    res.send('Record Inserted!!')
  }catch(err){
    res.send('Error in Insert Record!!')
  }
    
})

connectDB().then(() => {
    console.log('Database Connected!') 
    app.listen(3000,() => {
    console.log('Server start at port 3000')   
    })
}).catch(() => {
    console.log('Database not Connected!') 
})



