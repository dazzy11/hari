const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Body parser middleware
app.use(bodyParser.json());

// Connect to MongoDB (replace 'your_database_url' with your actual MongoDB URL)
mongoose.connect('mongodb://localhost:27017/chatAppDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/messages', require('./routes/messages'));

// Define routes (you'll define these routes later)
// Example:
// app.use('/api/messages', require('./routes/messages'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
