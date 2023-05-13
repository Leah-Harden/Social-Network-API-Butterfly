const { connect, connection } = require('mongoose');

const url = 'mongodb://localhost:27017/thought_db';


const connectionString =
    process.env.MONGODB_URI || url;

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;
