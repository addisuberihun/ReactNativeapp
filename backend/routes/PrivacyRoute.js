const express = require('express');
const router = express.Router();
const User = require('../models/PrivacyModel'); // Make sure this model exists

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      console.log('Invalid login attempt:', { email });
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    console.log('Login successful:', { email });
    res.json({ message: 'Login successful' });

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
