const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/chatapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

// Define schema and models if you want to store chat history in the database
