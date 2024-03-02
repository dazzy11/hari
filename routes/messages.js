// routes/messages.js

const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// Route to send a message
router.post('/', async (req, res) => {
  try {
    const { sender, recipient, content } = req.body;
    const message = new Message({ sender, recipient, content });
    await message.save();
    res.status(201).json({ message });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to get all messages between two users
router.get('/:sender/:recipient', async (req, res) => {
  try {
    const { sender, recipient } = req.params;
    const messages = await Message.find({
      $or: [
        { sender, recipient },
        { sender: recipient, recipient: sender }
      ]
    }).sort({ timestamp: 1 });
    res.json({ messages });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
