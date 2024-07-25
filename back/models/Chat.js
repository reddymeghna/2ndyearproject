// models/Chat.js
const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    prompt: { type: String, required: true },
    generated_text: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;
