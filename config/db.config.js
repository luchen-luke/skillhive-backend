const { Sequelize } = require('sequelize');
require('dotenv').config();

console.log('[ENV CHECK]', {
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DIALECT: process.env.DB_DIALECT,
});

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        dialect: process.env.DB_DIALECT,
        logging: false,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false, // 如果证书是自签名的
            },
        },
    }
);

module.exports = sequelize;
