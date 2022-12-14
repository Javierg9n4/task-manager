const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide a name for the task'],
    trim: true,
    maxlength: [40, 'name cannot exceed 40 characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  }
})

module.exports = mongoose.model('Task', taskSchema)