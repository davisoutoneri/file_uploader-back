require('dotenv').config();
const path = require('path');

module.exports = {
    development: {
        dialect: 'postgres',
        host: process.env.DATABASE_HOST, 
        port: process.env.DATABASE_PORT, 
        database: process.env.DATABASE_NAME,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD
    }
}