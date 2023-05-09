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
        const thoughts = await thoughts.findById(userId);
        if (!thoughts) {
            console.log('User not found');
            return;
        }
        const time = getDate() 

        const thought = new thoughts({ thoughtText, time, reactions});
        user.thoughts.push(thoughts._id);
        await Promise.all([user.save(), thoughts.save()]);
        console.log('thoughts created:', thoughts);
    } catch (error) {
        console.error('Error creating post:', error);
    }
}



// Get one thoughts
async function getOneThoughts(ThoughtsId) {
    try {
        const thoughts = await Thoughts.findById(ThoughtsId)
        console.log('one thoughts:', thoughts);
    } catch (error) {
        console.error('Error getting Thoughts:', error);
    }
}

// Get all Thoughts

async function getThoughts() {
    try {
        const thoughts = await Thoughts.find();
        console.log('All thoughts:', thoughts);
    } catch (error) {
        console.error('Error getting Thoughts:', error);
    }
}

// Get all posts from a user
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
async function updateThoughts(ThoughtsId, newData) {
    try {
        const Thoughts = await Thoughts.findByIdAndUpdate(ThoughtsId, newData, { new: true });
        if (!Thoughts) {
            console.log('Thoughts not found');
            return;
        }
        console.log('Thoughts updated:', Thoughts);
    } catch (error) {
        console.error('Error updating Thoughts:', error);
    }
}


// Delete a Thoughts by ID
async function deleteThoughts(ThoughtsId) {
    try {
        const Thoughts = await Thoughts.findByIdAndDelete(ThoughtsId);
        if (!Thoughts) {
            console.log('Thoughts not found');
            return;
        }
        console.log('Thoughts deleted:', Thoughts);
    } catch (error) {
        console.error('Error deleting Thoughts:', error);
    }
}

module.exports = {
    createThoughts,
    getOneThoughts,
    getThoughts,
    getUsersThoughts,
    updateThoughts,
    deleteThoughts
};
