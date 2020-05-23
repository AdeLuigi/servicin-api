const mongoose = require('mongoose');

const ChatFormatSchema = new mongoose.Schema({
  message: { type: String, required: true },
  sentBy: { type: String, required: true },
  date: { type: Date, required: true },
});

module.exports = ChatFormatSchema;
