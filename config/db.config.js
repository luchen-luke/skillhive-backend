// config/db.config.js
require('dotenv').config();

module.exports = {
    HOST: process.env.DB_HOST || 'localhost',
    USER: process.env.DB_USER || 'root',
    PASSWORD: process.env.DB_PASS || 'Cl@144507',
    DB: process.env.DB_NAME || 'skillhive',
    dialect: 'mysql',
};
