const express = require('express');
const app = express();
const taskRouter = require('./routes/taskRoutes');

// Middleware
app.use(express.static('./public'));
app.use(express.json());

// Routes
app.use('/api/v1/tasks', taskRouter);

module.exports = app;
