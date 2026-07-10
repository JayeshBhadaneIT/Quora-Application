const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
  answers: [{ type: String }],
});

module.exports = mongoose.model('Question', questionSchema);
