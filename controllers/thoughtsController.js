const User = require('../model/User');
const Thoughts = require('../model/Thoughts');



function getDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Note: Month starts from 0 (January is 0)
    const day = currentDate.getDate();

    return `Current date: ${year}-${month}-${day}`

}

// Create a new thoughts from a user
async function createThoughts(req, res) {
    try {
        const thought = await Thoughts.create(req.body);
        console.log('Thought created:', thought);
        res.json(thought);
    } catch (error) {
        console.error('Error creating thought:', error);
        res.status(500).json({ error: 'Failed to create thought' });
    }
}



// Get one thoughts
async function getOneThoughts(req, res) {
    try {
        const thought = await Thoughts.findById(req)
        console.log('one thoughts:', thought);
        res.json(thought)
    } catch (error) {
        console.error('Error getting Thoughts:', error);
    }
}

// Get all Thoughts

async function getThoughts(req, res) {
    try {
        const thought = await Thoughts.find();
        console.log('All thoughts:', thought);
        res.json(thought)
    } catch (error) {
        console.error('Error getting Thoughts:', error);
    }
}

// Get all posts from a user
async function getUsersThoughts(req, res) {
    try {
        const user = await User.findById(req).populate('thoughts');
        res.json(user)
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
async function updateThoughts(req, res) {
    try {
        const Thought = await Thoughts.findByIdAndUpdate(req.user_Id, req.newData, { new: true });
        if (!Thought) {
            console.log('Thoughts not found');
            res.json(Thought)
            return;
        }
        console.log('Thoughts updated:', Thought);
    } catch (error) {
        console.error('Error updating Thoughts:', error);
    }
}


// Delete a Thoughts by ID
async function deleteThoughts(req, res) {
    try {
        const Thought = await Thoughts.findByIdAndDelete(req);
        if (!Thought) {
            console.log('Thoughts not found');
            res.json(Thought)
            return;
        }
        console.log('Thoughts deleted:', Thought);
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
