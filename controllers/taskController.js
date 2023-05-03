const Task = require('../models/taskModel');

// NOTE: Get all tasks
exports.getAllTasks = async (req, res) => {
  const tasks = await Task.find();
  res.status(200).send({ success: true, data: tasks });
};
// NOTE: Create a task
exports.createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).send({ success: true, data: task });
};
// NOTE: Get a single task
exports.getTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.status(200).send({ success: true, data: task });
};
// TODO: Update a task
exports.updateTask = (req, res) => {
  res.send('Updated Task');
};
// TODO: Delete a task
exports.deleteTask = (req, res) => {
  res.send('Deleted Task');
};
