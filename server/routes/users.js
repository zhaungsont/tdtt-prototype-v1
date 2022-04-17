const router = require('express').Router();
let User = require('../models/user.model');
var CryptoJS = require("crypto-js");


function encryt (password) {
    var cipher = CryptoJS.AES.encrypt(password, 'secret key 123');
    cipher = cipher.toString();
    return cipher;
}
function decryt (ciphertext) {
    var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    originalText = originalText.toString();
    return originalText;
}

//Get user info
router.route('/get').get((req, res) => {
  User.find({"_id": req.body._id})
    .then(users => {
        users[0].password = decryt(users[0].password);
        res.json(users);
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

//New user account
router.route('/addAccount').post((req, res) => {
  const taskID = req.body.taskID;
  const userName = req.body.userName;
  const account = req.body.account;
  const password = encryt(req.body.password);
  const status = 0;
  const createTime = Date.now();

  const newUser = new User({
    taskID,
    userName,
    account,
    password,
    status,
    createTime});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Log In
router.route('/login').get((req, res) => {
    User.find({
        "account": req.body.account
    })
      .then(users => {
        // console.log(users[0].password);
        password = decryt(users[0].password)
        if (password == req.body.password){
            id = users[0]._id;
            users.status = 1;
            User.updateOne({_id : users[0]._id}, {$set: {status: 1}})
                .catch(err => res.status(400).json('Error: ' + err));
            res.json(id);
        }
        else{
            res.status(200).json('Error: Password');
        }
      })
      .catch(err => res.status(400).json('Error: ' + err));

  });

//Log Out
router.route('/logout').put((req, res) => {
    User.updateOne({_id : req.body._id}, {$set: {status: 0}})
        .then(() => res.json('logout successfully'))
        .catch(err => res.status(400).json('Error: ' + err));

});

//Rename
router.route('/rename').put((req, res) => {
    User.updateOne({_id : req.body._id}, {$set: {userName: req.body.userName}})
        .then(() => res.json('rename successfully'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Revise Password
router.route('/putPassword').put((req, res) => {
    User.updateOne({_id : req.body._id}, {$set: {password: encryt(req.body.password)}})
        .then(() => res.json('putPassword successfully'))
        .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;