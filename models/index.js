'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
require('dotenv').config();

const basename = path.basename(__filename);
const db = {};

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
);

// 自动导入所有 model
fs.readdirSync(__dirname)
    .filter(file => file !== basename && file.endsWith('.js'))
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

// 设置模型关联
const { User, Project, Application } = db;

// User.hasMany(Project, { foreignKey: 'user_id' });
// Project.belongsTo(User, { foreignKey: 'user_id' });

// User.hasMany(Application, { foreignKey: 'user_id' });
// Project.hasMany(Application, { foreignKey: 'project_id' });

// Application.belongsTo(User, { foreignKey: 'user_id' });
// Application.belongsTo(Project, { foreignKey: 'project_id' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
