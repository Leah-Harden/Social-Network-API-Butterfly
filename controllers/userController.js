const User = require('../model/User');
const Thoughts = require('../model/Thoughts');

// Create a new user
async function createUser(req, res) {
    try {
        const user = new User.create(req.body);
        console.log('User created:', user);
        res.json(user)
    } catch (error) {
        console.error('Error creating user:', error);
    }
}


// Get one user
async function getUser(req, res) {
    try {
        const user = await User.findById(req)
        console.log('found user:', user);
        res.json(user)
    } catch (error) {
        console.error('Error getting users:', error);
    }
}

async function getAllUsers(req, res) {
    try {
        const users = await User.find()
        console.log('All users:', users);
        res.json(users)
    } catch (error) {
        console.error('Error getting users:', error);
    }
}

// Update a user by ID
async function updateUser(req, res) {
    try {
        const user = await User.findByIdAndUpdate(req.user_Id, req.newData, { new: true });
        if (!user) {
            console.log('User found and updated');
            res.json(user)
            return;
        }
        console.log('User updated:', user);
    } catch (error) {
        console.error('Error updating user:', error);
    }
}



// Delete a user by ID
async function deleteUser(req, res) {
    try {
        const user = await User.findByIdAndDelete(req);
        if (!user) {
            console.log('User found and deleted');
            res.json(user)
            return;
        }
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
