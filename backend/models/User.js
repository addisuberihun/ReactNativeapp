const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true }, // Make sure this matches frontend request
    password: { type: String, required: true },
    city: { type: String },
  },
  { timestamps: true } // ✅ Correct placement
);

const User = mongoose.model('User', userSchema, 'Users');

module.exports = User;
