const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    taskId: { type: Number, required: true },
    year: { type: Number, required: true },
    month: { type: Number, required: true },
    day: { type: Number, required: true },
    date: { type: Date, required: true },
    time: { type: Date, required: true },
    createTime: { type: Date, required: true }
    
  }, {
    timestamps: true,
  });

const User = mongoose.model('Calender', userSchema);

module.exports = Calender;