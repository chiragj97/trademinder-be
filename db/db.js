// Create a new file, db.js, in a suitable directory, e.g., utils/db.js
const knex = require('knex');
const config = require('../knexfile');

// Choose the environment based on NODE_ENV
const environment = process.env.NODE_ENV || 'development';
const connectionConfig = config[environment];
const db = knex(connectionConfig);

module.exports = db;
