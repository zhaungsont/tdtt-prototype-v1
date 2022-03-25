const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    reviewID: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    NumberOfTask: { type: Number, required: true },
    sumHr: { type: Number, required: true },
    avgHr: { type: Number, required: true },
    performance: { type: Number, required: true }
    
  }, {
    timestamps: true,
  });

const User = mongoose.model('Review', userSchema);

module.exports = Review;