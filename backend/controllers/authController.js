const User = require('../models/User');

// Login Controller
const loginUser = async (req, res) => {
    const { walletAddress } = req.body;

    try {
        const user = await User.findOne({ walletAddress });
        if (user) {
            return res.json({ user });
        } else {
            return res.status(404).json({ message: 'User not found. Please register.' });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server Error' });
    }
};

// Register Controller
const registerUser = async (req, res) => {
    const { walletAddress, role } = req.body;

    try {
        const existingUser = await User.findOne({ walletAddress });
        if (existingUser) {
            return res.status(400).json({ message: 'User already registered.' });
        }

        const newUser = new User({
            walletAddress,
            role,
        });

        await newUser.save();
        return res.status(201).json({ message: 'User registered successfully!', user: newUser });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    loginUser,
    registerUser,
};
