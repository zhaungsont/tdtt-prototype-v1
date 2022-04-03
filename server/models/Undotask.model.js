const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const undotaskSchema = new Schema({
  undoTaskId: { type: Number, required: true },
  taskID: { type: Number, required: true },
  expirationDate: { type: Date, required: true },
  expireTime: { type: Number, required: true },
  status: { type: Number, required: true }
    
  }, {
    timestamps: true,
  });

const User = mongoose.model('Undotask', undotaskSchema);

module.exports = Undotask;