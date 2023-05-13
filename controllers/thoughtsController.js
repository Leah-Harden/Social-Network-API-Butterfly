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
        await User.findOneAndUpdate({ username: req.body.username }, { $push: { thoughts: thought._id } });
        res.json(thought);
    } catch (error) {
        console.error('Error creating thought:', error);
        res.status(500).json({ error: 'Failed to create thought' });
    }
}



// Get one thoughts
async function getOneThoughts(req, res) {
    try {
        const thought = await Thoughts.findById(req.params.thoughtId);
        console.log('One thought:', thought);
        res.json(thought);
    } catch (error) {
        console.error('Error getting thoughts:', error);
        res.status(500).json({ message: 'Error getting thoughts' });
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

// // Get all posts from a user
// async function getUsersThoughts(req, res) {
//     try {
//         const user = await User.findById(req.params.thoughtId).populate('thoughts');
//         if (user) {
//             console.log('thoughts found by Users');
//             res.json(user)
//         } else {
//             console.log('thoughts not found');
//             res.status(404).json({ message: 'thoughts not found' });
//         }
//     } catch (error) {
//         console.error('Error deleting thoughts:', error);
//         res.status(500).json({ message: 'Error deleting thoughts' });
//     }
// }

// Update a thoughts by ID
async function updateThoughts(req, res) {
    try {
        const thought = await Thoughts.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
        if (thought) {
            console.log('Thought found and updated:', thought);
            res.json(thought);
        } else {
            console.log('Thought not found');
            res.status(404).json({ message: 'Thought not found' });
        }
    } catch (error) {
        console.error('Error updating thought:', error);
        res.status(500).json({ message: 'Error updating thought' });
    }
}


// Delete a Thoughts by ID
async function deleteThoughts(req, res) {
    try {
        const Thought = await Thoughts.findByIdAndDelete(req.params.thoughtId);
        if (Thought) {
            console.log('Thought found and deleted');
            res.json(Thought)
            return;
        } else {
            console.log('Thought not found');
            res.status(404).json({ message: 'Thought not found' });
        }
        console.log('Thoughts deleted:', Thought);
    } catch (error) {
        console.error('Error deleting Thought:', error);
        res.status(500).json({ message: 'Error deleting Thought' });
    }
}

module.exports = {
    createThoughts,
    getOneThoughts,
    getThoughts,
    // getUsersThoughts,
    updateThoughts,
    deleteThoughts
};
