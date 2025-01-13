const express = require('express');
const router = express.Router();
const { loginUser, registerUser } = require('../controllers/authController');

// Login route
router.post('/login', loginUser);

// Registration route
router.post('/register', registerUser);

module.exports = router;
