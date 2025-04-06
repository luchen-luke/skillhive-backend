require('dotenv').config(); // 安全起见再加一次
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// 注册模型
db.User = require('./user.model')(sequelize, DataTypes);
db.Project = require('./project.model')(sequelize, DataTypes);

// 可添加更多模型...

module.exports = db;
