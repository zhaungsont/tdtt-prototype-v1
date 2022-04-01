const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const goalSchema = new Schema({
    goalID: { type: Number, required: true },
    title: { type: String, required: true },
    cotent: { type: String, required: true },
    goalTaskList: { type: Array, required: true },
    ED: { type: Number, required: true },
    createTime: { type: Date, required: true },
    isComplete: { type: Number, required: true }
    
  }, {
    timestamps: true,
  });

const User = mongoose.model('Goal', goalSchema);

module.exports = Goal;