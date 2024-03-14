const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    trim: true,
  },
  createDate: Date,
  completedDate: Date,
  completed: Boolean
});

module.exports = mongoose.model('Task', taskSchema);

const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  catagory: {
    type: String,
    trim: true,
  },
  createDate: Date,
  //completedDate: Date,
  //completed: Boolean,
  price: {
    type: Number,
    required: true // Assuming price is a required field
  },
  pID: {
    type: Number,
    required: true // Assuming price is a required field
  }
});

module.exports = mongoose.model('Task', taskSchema);
