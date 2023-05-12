const connection = require('../config/connection');

const User = require('../model/User');
const userData = require('../utils/userData');

const Thoughts = require('../model/Thoughts');
const thoughtsData = require('../utils/thoughtsData');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    // Drop existing User
    await User.deleteMany({});

    // Drop existing Thoughts
    await Thoughts.deleteMany({});

    // seeded data
    await User.insertMany(userData);
    await Thoughts.insertMany(thoughtsData);

    console.table(User);
    console.info('Seeding complete! 🌱');
    process.exit(0);
})