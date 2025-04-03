const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../config/db.config');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
    }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// 初始化模型
db.User = require('./user.model')(sequelize, DataTypes);
db.Project = require('./project.model')(sequelize, DataTypes);
// 其他模型...

// 关联关系也可以加在这里

module.exports = db;
