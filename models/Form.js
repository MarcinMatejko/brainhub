const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  eventName: {
    type: String,
    required: true,
  },
  eventDesc: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Form = mongoose.model('form', FormSchema);
