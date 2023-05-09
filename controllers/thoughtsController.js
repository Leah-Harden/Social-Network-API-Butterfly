const User = require('./models/User');
const Thoughts = require('./models/Post');



function getDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Note: Month starts from 0 (January is 0)
    const day = currentDate.getDate();
    
    return `Current date: ${year}-${month}-${day}`
    
}

// Create a new thoughts from a user
async function createThoughts(thoughtText, userId,reactions ) {
    try {
        const user = await User.findById(userId);
        if (!user) {
            console.log('User not found');
            return;
        }
        const time = getDate() 

        const post = new Post({ thoughtText, time, reactions});
        user.thoughts.push(post._id);
        await Promise.all([user.save(), post.save()]);
        console.log('Post created:', post);
    } catch (error) {
        console.error('Error creating post:', error);
    }
}

// Get all Thoughts

async function getThoughts(ThoughtsId) {
    try {
        const user = await Thoughts.findById(ThoughtsId)
        console.log('All users:', users);
    } catch (error) {
        console.error('Error getting users:', error);
    }
}

// Get all posts for a user
async function getUsersThoughts(userId) {
    try {
        const user = await User.findById(userId).populate('thoughts');
        if (!user) {
            console.log('User not found');
            return;
        }
        console.log('User posts:', user.thoughts);
    } catch (error) {
        console.error('Error getting user posts:', error);
    }
}

// Update a thoughts by ID
async function updateThoughts(userId, newData) {
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


// Delete a Thoughts by ID
async function deleteThoughts(ThoughtsId) {
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
    createThoughts,
    getThoughts,
    getUsersThoughts,
    updateThoughts,
    deleteThoughts
};
