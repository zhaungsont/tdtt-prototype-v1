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
    EST: { type: Date, required: true },
    AST: { type: Date, required: true },
    EET: { type: Date, required: true },
    AET: { type: Date, required: true },
    ED: { type: Number, required: true },
    AD: { type: Number, required: true },
    Notification: { type: Array, required: true },
    Status: { type: Number, required: true },
    userID: { type: Number, required: true },
    createTime: { type: Date, required: true }
    
  }, {
    timestamps: true,
  });

const User = mongoose.model('Task', taskSchema);

module.exports = Task;