const express = require('express');
const app = express();
const taskRouter = require('./routes/taskRoutes');

// Middleware
app.use(express.static('./public'));
app.use(express.json());

// Routes
app.use('/api/v1/tasks', taskRouter);
app.all('*', (req, res, next) => {
  res.status(404).send(`Route doesn't exist!`);
  next();
});

module.exports = app;
