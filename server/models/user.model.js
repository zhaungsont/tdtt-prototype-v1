const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    userID: { type: Number, required: true },
    userName: { type: String, required: true },
    account: { type: String, required: true },
    password: { type: String, required: true },
    status: { type: Number, required: true }
    
  }, {
    timestamps: true,
  });

const User = mongoose.model('User', userSchema);

module.exports = User;