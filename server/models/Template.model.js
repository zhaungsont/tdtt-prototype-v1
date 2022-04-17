const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const templateSchema = new Schema({
    templateID: { type: Number, required: true },
    name: { type: String, required: true },
    taskList: { type: String, required: true },
    takeTime: { type: String, required: true },
    createTime: { type: Date, required: true }
  }, {
    timestamps: true,
  });

const User = mongoose.model('Template', templateSchema);

module.exports = Template;