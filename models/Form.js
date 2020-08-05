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
    required: false,
  },
  eventDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

module.exports = Form = mongoose.model('form', FormSchema);
