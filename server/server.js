const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.model.js');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//connect mongo 
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection successfully");
})

// const gg = new User({
//   userID: 12345,
//   userName: 'gg',
//   account: 'gg@gg',
//   password: '123',
//   status: 123
// });

// gg.save();

 
app.post('/api/login', async (req, res)=>{
  // console.log(req.body.account);
  // console.log(req.body.password);
  const user = await User.findOne({
    account: req.body.account, 
    password: req.body.password
  });
  if (user) {
    const token = jwt.sign(
      {
        userName: user.userName,
        account: user.account
      }, 'secret123', {
        expiresIn:60
      })
      return res.cookie('token', token, { httpOnly:true })
    // return res.json({status: 'ok', user: token})
  } else {
    return res.json({status: 'error', user: false})
  }
})

app.listen(port, () => {          
    console.log(`Server is running on port :${port}`);
});
