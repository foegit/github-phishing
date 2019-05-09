const mongoose = require('mongoose');

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const dbUrl = process.env.DB_URL;

const connectionString = `mongodb://${username}:${password}@${dbUrl}`;

mongoose.connect(connectionString, { useNewUrlParser: true });

mongoose.connection.on('open', () => {
  console.log('Success connection to database.');
});

mongoose.connection.on('error', (error) => {
  console.log(`Failed to connection to database.\n${error}`);
});

module.exports = mongoose.connection;
