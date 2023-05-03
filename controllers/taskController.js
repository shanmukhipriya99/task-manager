const Task = require('../models/taskModel');

// NOTE: Get all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res
      .status(200)
      .send({ success: true, quantity: tasks.length, data: tasks });
  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, message: 'There was an error!💥' });
  }
};
// NOTE: Create a task
exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).send({ success: true, data: task });
  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, message: 'There was an error!💥' });
  }
};
// NOTE: Get a single task
exports.getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res
        .status(404)
        .send({ success: false, message: `No task with id: ${req.params.id}` });
    }
    res.status(200).send({ success: true, data: task });
  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, message: 'There was an error!💥' });
  }
};
// NOTE: Update a task
exports.updateTask = async (req, res) => {
  try {
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
  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, message: 'There was an error!💥' });
  }
};
// NOTE: Delete a task
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res
        .status(404)
        .send({ success: false, message: `No task with id: ${req.params.id}` });
    }
    res.status(200).send({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, message: 'There was an error!💥' });
  }
};
