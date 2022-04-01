const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//欄位等頁面出來再確定
const goodhabitsSchema = new Schema({
    habitID: { type: Number, required: true },
    habitName: { type: String, required: true },
    continueDay: { type: Number, required: true }
    
  }, {
    timestamps: true,
  });

const User = mongoose.model('Goodhabits', goodhabitsSchema);

module.exports = Goodhabits;