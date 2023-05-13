const User = require('../model/User');
const Thoughts = require('../model/Thoughts');

// Create a new user
async function createUser(req, res) {
    try {
        const user = await User.create(req.body);
        console.log('User created:', user);
        res.json(user);
    } catch (error) {
        console.error('Error creating user:', error);
    }
}

// Get one user
async function getUser(req, res) {
    try {
        const user = await User.findById(req.params.userId)
        console.log('found user:', user);
        res.json(user)
    } catch (error) {
        console.error('Error getting users:', error);
    }
}

async function getAllUsers(req, res) {
    try {
        const users = await User.find().populate('thoughts')
        console.log('All users:', users);
        res.json(users)
    } catch (error) {
        console.error('Error getting users:', error);
    }
}

// Update a user by ID
async function updateUser(req, res) {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
        if (user) {
            console.log('User found and updated:', user);
            res.json(user);
        } else {
            console.log('User not found');
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Error updating user' });
    }
}


// Delete a user by ID
async function deleteUser(req, res) {
    try {
        const user = await User.findByIdAndDelete(req.params.userId);
        if (user) {
            console.log('User found and deleted');
            res.json(user);
        } else {
            console.log('User not found');
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Error deleting user' });
    }
}

// Get all posts from a user
async function getUsersThoughts(req, res) {
    try {
        const user = await User.findById(req.params.thoughtId).populate('thoughts');
        if (user) {
            console.log('thoughts found by Users');
            res.json(user)
        } else {
            console.log('thoughts not found');
            res.status(404).json({ message: 'thoughts not found' });
        }
    } catch (error) {
        console.error('Error deleting thoughts:', error);
        res.status(500).json({ message: 'Error deleting thoughts' });
    }
}


module.exports = {
    createUser,
    getUser,
    getAllUsers,
    updateUser,
    deleteUser,
    getUsersThoughts
};
