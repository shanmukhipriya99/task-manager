const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Must have a name'],
    trim: true,
    maxLength: [50, 'Must be below 50 characters'],
  },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('Task', taskSchema);
