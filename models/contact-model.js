const { Schema, model, default: mongoose } = require('mongoose');

const contactForm = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Contact = new mongoose.model('Contact', contactForm);
module.exports = Contact;
