const mongoose = require('mongoose');
const ChatFormatSchema = require('./utils/ChatFormatSchema');

// import { uuid } from 'uuidv4';

const ChatSchema = new mongoose.Schema({
  requesterId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  providerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  messages: { type: [ChatFormatSchema], required: true },
});


module.exports = mongoose.model('Chat', ChatSchema);
