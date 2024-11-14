// backend/app.js
const express = require('express');
const cors = require('cors');
const loanRoutes = require('./routes/loanRoutes');
const connectDB = require('./config/db');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/loans', loanRoutes);

module.exports = app;
