const Task = require('../models/taskModel');
const catchAsync = require('../middleware/catchAsync');

// NOTE: Get all tasks
exports.getAllTasks = catchAsync(async (req, res) => {
  const tasks = await Task.find();
  res.status(200).send({ success: true, quantity: tasks.length, data: tasks });
});
// NOTE: Create a task
exports.createTask = catchAsync(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).send({ success: true, data: task });
});
// NOTE: Get a single task
exports.getTask = catchAsync(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    return res
      .status(404)
      .send({ success: false, message: `No task with id: ${req.params.id}` });
  }
  res.status(200).send({ success: true, data: task });
});
// NOTE: Update a task
exports.updateTask = catchAsync(async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    runValidators: true,
    new: true,
  });
  if (!task) {
    return res
      .status(404)
      .send({ success: false, message: `No task with id: ${req.params.id}` });
  }
  res.status(200).send({ success: true, data: task });
});
// NOTE: Delete a task
exports.deleteTask = catchAsync(async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) {
    return res
      .status(404)
      .send({ success: false, message: `No task with id: ${req.params.id}` });
  }
  res.status(200).send({ success: true });
});
