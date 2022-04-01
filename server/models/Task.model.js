const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    taskID: { type: Number, required: true },
    subTaskID: { type: Array, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    note: { type: String, required: true },
    location: { type: String, required: true },
    group: { type: String, required: true },
    categories: { type: String, required: true },
    Track: { type: Array, required: true },
    startTime: { type: Date, required: true },
    realStartTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    realEndTime: { type: Date, required: true },
    estimateSumSpentTime: { type: Number, required: true },
    realSumSpentTime: { type: Number, required: true },
    Notification: { type: Array, required: true },
    Status: { type: Number, required: true }
    
  }, {
    timestamps: true,
  });

const User = mongoose.model('Task', taskSchema);

module.exports = Task;