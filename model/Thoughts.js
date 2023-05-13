const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

//reaction 
const reactionSchema = new mongoose.Schema({
    reactionUser_Id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    reactionBody: {
        type: String,
        required: true,
        //unique: true,
        maxlength: 280
    },
    usernameReaction: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

//thoughts
const thoughtsSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        //unique: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema],

}
);

// Define the virtual property "reactionCount"
thoughtsSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});



// the getter to format date 
reactionSchema.virtual('dateMaker').get(function () {
    const year = getFullYear(this.createdAt)
    const month = getMonth(this.createdAt)
    const day = getDay(this.createdAt)

    const fullDate = `${day}/${month}/${year}`;
    return fullDate
})




const Thoughts = mongoose.model('Thoughts', thoughtsSchema);

module.exports = Thoughts;