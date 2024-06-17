const express = require('express');
const bcrypt = require('bcryptjs'); // For hashing passwords
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const router = express.Router();

// Registration route: POST "/api/auth/register"
router.post(
    '/register',
    [
        body('name', 'Name must be at least 3 characters').isLength({ min: 3 }),
        body('email', 'Invalid email').isEmail(),
        body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ msg: 'User already exists' });
            }

            // Hash the password before saving
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            console.log('hashedPassword',hashedPassword);
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
            });

            res.json(user);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

// Login route: POST "/api/auth/login"
router.post(
    '/login',
    [
        body('email', 'Please include a valid email').isEmail(),
        body('password', 'Password is required').exists(),
    ],
    async (req, res) => {
      console.log('re');
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          console.log('error',errors);
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { email, password } = req.body;
            console.log(email, password);
            let user = await User.findOne({ email });
            console.log('user',user);
            if (!user) {
                return res.status(400).json({ msg: 'Invalid Credentials' });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            console.log('isMatch',isMatch);
            if (!isMatch) {
                return res.status(400).json({ msg: 'Invalid Credentials' });
            }

            // User matched, proceed with login logic (like generating a JWT token)
            // For simplicity, returning user data directly
            res.json(user);

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

module.exports = router;
