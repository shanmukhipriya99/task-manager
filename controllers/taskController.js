const Task = require('../models/taskModel');

// TODO: Get all tasks
exports.getAllTasks = async (req, res) => {
  const tasks = await Task.find();
  res.status(200).send({ success: true, data: tasks });
};
// TODO: Create a task
exports.createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).send({ success: true, data: task });
};
// TODO: Get a single task
exports.getTask = (req, res) => {
  res.send('Get Single Task');
};
// TODO: Update a task
exports.updateTask = (req, res) => {
  res.send('Updated Task');
};
// TODO: Delete a task
exports.deleteTask = (req, res) => {
  res.send('Deleted Task');
};
