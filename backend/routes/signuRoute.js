const express = require('express');
const router = express.Router();
const { signupUser, loginUser } = require('../controllers/authController');

// Signup route
router.post('/signup', signupUser);

// Login route

module.exports = router;
