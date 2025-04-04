// models/user.model.js

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: { type: DataTypes.STRING(100), allowNull: false },
        email: { type: DataTypes.STRING(255), allowNull: false, unique: true },
        password: { type: DataTypes.STRING(255), allowNull: false },
        role: {
            type: DataTypes.ENUM('student', 'admin'),
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    }, {
        tableName: 'users',
        timestamps: false,
    });

    return User;
};
