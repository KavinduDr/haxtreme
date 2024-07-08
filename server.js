const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./db');

// Connect to database
connectDB();

// Middleware to parse JSON bodies
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/register', require('./config/register'));

// Define a root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Use the port from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
