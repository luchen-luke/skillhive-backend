'use strict';
module.exports = (sequelize, DataTypes) => {
    const Skill = sequelize.define('Skill', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    }, {
        tableName: 'skills',
        underscored: true,
    });

    return Skill;
};
