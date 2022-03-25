const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    userID: { type: Integer, required: true },
    userName: { type: String, required: true },
    account: { type: String, required: true },
    password: { type: String, required: true },
    status: { type: Integer, required: true }
    
  }, {
    timestamps: true,
  });

const User = mongoose.model('Task', userSchema);

module.exports = Task;