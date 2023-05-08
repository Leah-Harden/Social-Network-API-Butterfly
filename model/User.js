const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    thoughts: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Thoughts'
    },
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Friends'
    }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;