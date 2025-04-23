const mongoose = require('mongoose');

const privacySchema = new mongoose.Schema({
  content: { type: String, required: true }
});

module.exports = mongoose.model('Privacy', privacySchema);
