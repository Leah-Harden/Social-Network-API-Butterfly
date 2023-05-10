const User = require('../model/User');
const Thoughts = require('../model/Thoughts');

// Create a new user
async function createUser(username, email, thoughts, friends) {
    try {
        const user = new User({ username, email, thoughts, friends });
        await user.save();
        console.log('User created:', user);
    } catch (error) {
        console.error('Error creating user:', error);
    }
}


// Get one user
async function getUser(userId) {
    try {
        const user = await User.findById(userId)
        console.log('All users:', users);
    } catch (error) {
        console.error('Error getting users:', error);
    }
}

async function getAllUsers() {
    try {
        const users = await User.find();
        console.log('All users:', users);
    } catch (error) {
        console.error('Error getting users:', error);
    }
}


// Update a user by ID
async function updateUser(userId, newData) {
    try {
        const user = await User.findByIdAndUpdate(userId, newData, { new: true });
        if (!user) {
            console.log('User not found');
            return;
        }
        console.log('User updated:', user);
    } catch (error) {
        console.error('Error updating user:', error);
    }
}



// Delete a user by ID
async function deleteUser(ThoughtsId) {
    try {
        const user = await Thoughts.findByIdAndDelete(userId);
        if (!user) {
            console.log('User not found');
            return;
        }
        console.log('User deleted:', user);
    } catch (error) {
        console.error('Error deleting user:', error);
    }
}



module.exports = {
    createUser,
    getUser,
    getAllUsers,
    updateUser,
    deleteUser,
};
