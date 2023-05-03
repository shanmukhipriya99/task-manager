const express = require('express');
const app = express();
const taskRouter = require('./routes/taskRoutes');
const AppError = require('./middleware/appError');
const { globalErrorHandler } = require('./middleware/globalErrorHandler');

// Middleware
app.use(express.static('./public'));
app.use(express.json());

// Routes
app.use('/api/v1/tasks', taskRouter);
app.all('*', (req, res, next) => {
  // res.status(404).send(`Route doesn't exist!`);
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

// global error handling middleware
app.use(globalErrorHandler);

module.exports = app;
