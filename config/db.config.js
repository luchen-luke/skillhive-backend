const { Sequelize } = require('sequelize');
require('dotenv').config(); // 确保你能读到 .env

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false, // ← 必须关闭校验证书
            },
        },
        logging: false,
    }
);

module.exports = sequelize;