const { connect, connection } = require('mongoose');

const url = 'mongodb://localhost/3001';


const connectionString =
    process.env.MONGODB_URI || url;

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;
