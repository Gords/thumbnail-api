require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// Initialize Express
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

// Use JSON middleware
app.use(express.json());

// Define a simple route to ensure our server is working
app.get('/', (req, res) => {
    res.send('Thumbnail API is running...');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
