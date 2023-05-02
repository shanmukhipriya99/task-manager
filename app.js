const express = require('express');
const app = express();
const taskRouter = require('./routes/taskRoutes');

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Task Manager App');
});
app.use('/api/v1/tasks', taskRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
